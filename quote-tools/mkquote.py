import sys, random
from PIL import Image, ImageDraw, ImageFont, ImageFilter
W,H=1080,1350
FD="/usr/share/fonts/truetype/liberation/"
def font(n,s): return ImageFont.truetype(FD+n,s)
STYLES={
 "dark":dict(bg=(20,27,43),bg2=(34,40,56),text=(240,230,208),accent=(201,168,98),sub=(201,168,98)),
 "parchment":dict(bg=(240,228,200),bg2=(226,208,168),text=(92,28,36),accent=(130,40,48),sub=(110,70,50)),
}
def wrap(d,t,f,maxw):
    words=t.split();lines=[];cur=""
    for w in words:
        test=(cur+" "+w).strip()
        if d.textlength(test,font=f)<=maxw: cur=test
        else: lines.append(cur);cur=w
    lines.append(cur);return lines
def make(quote,author,book,style,out):
    s=STYLES[style]
    img=Image.new("RGB",(W,H),s["bg"])
    # vignette gradient
    g=Image.new("L",(W,H),0);gd=ImageDraw.Draw(g)
    gd.ellipse((-200,-200,W+200,H+200),fill=255)
    g=g.filter(ImageFilter.GaussianBlur(220))
    img=Image.composite(Image.new("RGB",(W,H),s["bg"]),Image.new("RGB",(W,H),s["bg2"]),g)
    if style=="parchment":
        random.seed(3);px=img.load()
        for _ in range(60000):
            x,y=random.randrange(W),random.randrange(H);r,gg,b=px[x,y];k=random.randint(-8,8)
            px[x,y]=(r+k,gg+k,b+k)
    d=ImageDraw.Draw(img)
    m=90
    if style=="parchment":
        d.rectangle((50,50,W-50,H-50),outline=s["accent"],width=3)
        d.rectangle((62,62,W-62,H-62),outline=s["accent"],width=1)
    q="“"+quote+"”"
    maxw=W-2*m-40
    size=64
    while size>34:
        f=font("LiberationSerif-Regular.ttf",size)
        lines=wrap(d,q,f,maxw)
        lh=int(size*1.38)
        if len(lines)*lh<=700: break
        size-=2
    th=len(lines)*lh
    af=font("LiberationSerif-Italic.ttf",40)
    bf=font("LiberationSerif-Italic.ttf",32)
    blines=wrap(d,book,bf,maxw) if book else []
    block=th+70+60+(len(blines)*44+10 if blines else 0)
    y=(H-block)//2
    for ln in lines:
        w=d.textlength(ln,font=f);d.text(((W-w)/2,y),ln,font=f,fill=s["text"]);y+=lh
    y+=30
    d.line((W/2-70,y,W/2+70,y),fill=s["accent"],width=3);y+=40
    t="— "+author;w=d.textlength(t,font=af)
    d.text(((W-w)/2,y),t,font=af,fill=s["sub"]);y+=62
    for ln in blines:
        w=d.textlength(ln,font=bf);d.text(((W-w)/2,y),ln,font=bf,fill=s["sub"]);y+=44
    img.save(out)
if __name__=="__main__":
    make("Had it not been for Christ, death would have reigned for ever over our fallen race; but thanks be to God, Christ hath given us the victory.","Charles Hodge","An Exposition of the First Epistle to the Corinthians","dark","q/sample_dark.png")
    make("Providence without the word is a dark enigma. None can solve it. The best commentary on Providence is the Bible. The best commentary on the Bible is Providence.","William S. Plumer","Jehovah-Jireh: A Treatise on Providence","parchment","q/sample_parch.png")
