import random, math
from PIL import Image, ImageDraw, ImageFont, ImageFilter
W,H=1080,1350
FD="/usr/share/fonts/truetype/liberation/"
def F(n,s): return ImageFont.truetype(FD+"LiberationSerif-"+n+".ttf",s)
def wrap(d,t,f,mw):
    lines=[];cur=""
    for w in t.split():
        x=(cur+" "+w).strip()
        if d.textlength(x,font=f)<=mw: cur=x
        else: lines.append(cur);cur=w
    lines.append(cur);return lines
def fit(d,q,style,maxw,maxh,lo=34,hi=64,lh=1.38):
    s=hi
    while s>lo:
        f=F(style,s);L=wrap(d,q,f,maxw)
        if len(L)*int(s*lh)<=maxh: break
        s-=2
    return F(style,s),L,int(s*lh)
def grad(c1,c2,vertical=True):
    img=Image.new("RGB",(W,H));px=img.load()
    for y in range(H):
        t=y/H
        c=tuple(int(c1[i]+(c2[i]-c1[i])*t) for i in range(3))
        for x in range(W): px[x,y]=c
    return img
def tw(d,t,f): return d.textlength(t,font=f)
def diamond(d,cx,cy,r,col): d.polygon([(cx,cy-r),(cx+r,cy),(cx,cy+r),(cx-r,cy)],fill=col)

def s_forest(q,a,b,out):  # left-aligned, big quote mark, vertical bar
    img=Image.new("RGB",(W,H),(24,52,40));d=ImageDraw.Draw(img)
    gold=(212,176,98);cream=(238,232,212)
    d.rectangle((90,200,98,H-200),fill=gold)
    d.text((140,120),"“",font=F("Bold",330),fill=(212,176,98))
    f,L,lh=fit(d,q,"Regular",W-140-110,640,hi=60)
    y=340
    for ln in L: d.text((140,y),ln,font=f,fill=cream);y+=lh
    y+=40
    d.text((140,y),a.upper(),font=F("Bold",34),fill=gold);y+=54
    d.text((140,y),b,font=F("Italic",32),fill=(190,196,176))
    img.save(out)
def s_ornate(q,a,b,out):  # navy, double frame, corner ornaments, italic
    img=grad((16,22,48),(30,38,72));d=ImageDraw.Draw(img)
    gold=(205,170,95)
    d.rectangle((48,48,W-48,H-48),outline=gold,width=3);d.rectangle((66,66,W-66,H-66),outline=gold,width=1)
    for (x,y) in [(48,48),(W-48,48),(48,H-48),(W-48,H-48)]: diamond(d,x,y,16,gold)
    for (x,y) in [(W//2,48),(W//2,H-48)]: diamond(d,x,y,10,gold)
    f,L,lh=fit(d,"“"+q+"”","Italic",W-260,720,hi=62)
    cream=(244,236,214)
    block=len(L)*lh+150;y=(H-block)//2
    for ln in L: d.text(((W-tw(d,ln,f))/2,y),ln,font=f,fill=cream);y+=lh
    y+=30
    diamond(d,W//2,y+10,8,gold);d.line((W//2-140,y+10,W//2-24,y+10),fill=gold,width=2);d.line((W//2+24,y+10,W//2+140,y+10),fill=gold,width=2);y+=50
    t=a.upper();d.text(((W-tw(d,t,F("Bold",36)))/2,y),t,font=F("Bold",36),fill=gold);y+=54
    d.text(((W-tw(d,b,F("Italic",32)))/2,y),b,font=F("Italic",32),fill=(200,196,180))
    img.save(out)
def s_band(q,a,b,out):  # cream, burgundy header band, bold scripture-style
    img=Image.new("RGB",(W,H),(246,240,226));d=ImageDraw.Draw(img)
    bur=(110,24,36)
    d.rectangle((0,0,W,200),fill=bur);d.rectangle((0,H-110,W,H),fill=bur)
    t="SOLI DEO GLORIA";f2=F("Bold",38)
    d.text(((W-tw(d,t,f2)-0)/2,80),t,font=f2,fill=(236,214,160))
    f,L,lh=fit(d,q,"Bold",W-200,700,hi=58,lh=1.36)
    block=len(L)*lh+130;y=200+(H-310-block)//2
    for ln in L: d.text(((W-tw(d,ln,f))/2,y),ln,font=f,fill=(50,30,30));y+=lh
    y+=30;d.line((W/2-60,y,W/2+60,y),fill=bur,width=4);y+=34
    af=F("Regular",40);t="— "+a;d.text(((W-tw(d,t,af))/2,y),t,font=af,fill=bur);y+=56
    bf=F("Italic",32);d.text(((W-tw(d,b,bf))/2,y),b,font=bf,fill=(100,80,70))
    t="@_5solas_";f3=F("Italic",30);d.text(((W-tw(d,t,f3))/2,H-80),t,font=f3,fill=(236,214,160))
    img.save(out)
def s_dawn(q,a,b,out):  # gradient dusk to amber glow, centered large
    img=Image.new("RGB",(W,H));px=img.load()
    top=(18,26,56);mid=(70,52,92);bot=(214,140,70)
    for y in range(H):
        t=y/H
        if t<0.6: c=[top[i]+(mid[i]-top[i])*(t/0.6) for i in range(3)]
        else: c=[mid[i]+(bot[i]-mid[i])*((t-0.6)/0.4) for i in range(3)]
        for x in range(W): px[x,y]=tuple(int(v) for v in c)
    d=ImageDraw.Draw(img)
    f,L,lh=fit(d,q,"Regular",W-200,650,hi=60)
    block=len(L)*lh+130;y=(H-block)//2-40
    for ln in L: d.text(((W-tw(d,ln,f))/2,y),ln,font=f,fill=(252,246,230));y+=lh
    y+=34;d.line((W/2-50,y,W/2+50,y),fill=(252,224,170),width=3);y+=36
    t=a;af=F("BoldItalic",42);d.text(((W-tw(d,t,af))/2,y),t,font=af,fill=(255,228,176));y+=58
    d.text(((W-tw(d,b,F("Italic",32)))/2,y),b,font=F("Italic",32),fill=(246,226,200))
    img.save(out)
def s_stone(q,a,b,out):  # stone gray, faded giant quote mark, flush-left bold author block
    img=Image.new("RGB",(W,H),(222,218,208));random.seed(5);px=img.load()
    for _ in range(80000):
        x,y=random.randrange(W),random.randrange(H);r,g,bb=px[x,y];k=random.randint(-7,7);px[x,y]=(r+k,g+k,bb+k)
    d=ImageDraw.Draw(img)
    d.text((60,-40),"“",font=F("Bold",760),fill=(206,201,190))
    ink=(36,40,48);acc=(150,96,40)
    d.rectangle((0,H-24,W,H),fill=acc)
    f,L,lh=fit(d,q,"Regular",W-200,640,hi=58)
    y=330
    for ln in L: d.text((100,y),ln,font=f,fill=ink);y+=lh
    y+=40;d.rectangle((100,y,260,y+6),fill=acc);y+=34
    d.text((100,y),a,font=F("Bold",42),fill=ink);y+=58
    d.text((100,y),b,font=F("Italic",32),fill=(90,90,90))
    img.save(out)

SCHEMES={
 "navy":dict(bg=(18,26,52),mark=(205,170,95),ink=(240,232,212),acc=(205,170,95),sub=(185,190,205),faded=False),
 "burgundy":dict(bg=(96,24,36),mark=(236,206,150),ink=(250,240,226),acc=(236,206,150),sub=(226,196,186),faded=False),
 "parch":dict(bg=(240,228,200),mark=(190,150,110),ink=(70,28,30),acc=(130,40,48),sub=(110,70,50),faded=True),
 "slate":dict(bg=(40,48,58),mark=(120,134,150),ink=(238,238,232),acc=(200,168,100),sub=(176,184,194),faded=True),
}
def s_bigmark(q,a,b,out,scheme,center=False):
    c=SCHEMES[scheme];img=Image.new("RGB",(W,H),c["bg"]);d=ImageDraw.Draw(img)
    if c["faded"]:
        mark=tuple(int(c["bg"][i]*0.82+c["mark"][i]*0.18) for i in range(3))
        d.text((50,-60),"“",font=F("Bold",800),fill=mark)
    else:
        d.text((80,90),"“",font=F("Bold",360),fill=c["mark"])
    f,L,lh=fit(d,q,"Regular",W-200,620,hi=58)
    block=len(L)*lh+38+34+58+40
    y=max(380,(H-block)//2+90)
    for ln in L: d.text((100,y),ln,font=f,fill=c["ink"]);y+=lh
    y+=38;d.rectangle((100,y,260,y+5),fill=c["acc"]);y+=34
    d.text((100,y),a,font=F("Bold",42),fill=c["ink"]);y+=58
    d.text((100,y),b,font=F("Italic",32),fill=c["sub"])
    img.save(out)
