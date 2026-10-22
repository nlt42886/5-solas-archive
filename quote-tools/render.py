"""Render a quote image (1080x1350) in one of 11 styles.
Usage: from render import render; render(style, quote, author, book, out_path)
Styles: forest ornate band dawn stone navy burgundy parch slate dark parchment
Needs: Pillow + Liberation Serif fonts (/usr/share/fonts/truetype/liberation/)."""
import mk2, mkquote
from mk2 import s_forest, s_ornate, s_band, s_dawn, s_stone, s_bigmark
STYLES=["forest","ornate","band","dawn","stone","navy","burgundy","parch","slate","dark","parchment"]
def render(style,q,a,b,out):
    if style=="forest": s_forest(q,a,b,out)
    elif style=="ornate": s_ornate(q,a,b,out)
    elif style=="band": s_band(q,a,b,out)
    elif style=="dawn": s_dawn(q,a,b,out)
    elif style=="stone": s_stone(q,a,b,out)
    elif style in("navy","burgundy","parch","slate"): s_bigmark(q,a,b,out,style)
    elif style in("dark","parchment"): mkquote.make(q,a,b,style,out)
    else: raise ValueError(style)
