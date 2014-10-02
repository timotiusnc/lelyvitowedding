#!/bin/sh

i=50
for file in /media/timotiusnc/3D84C2D53AF44CDF/MusicVidsPics/Pictures/Lely/Ketiga/*
do
 # do something on $file
 # convert $file -resize 66 gallery_sm_${i}.jpg
 # convert $file -resize 640 gallery_${i}.jpg
 convert $file -resize 250x250 -gravity center -extent 164x164 gallery_sm_${i}.jpg
 convert $file -resize 640 gallery_${i}.jpg
 echo "$file"
 echo "${i}"
 i=`expr $i + 1`
done
