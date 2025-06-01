import cv2
import glob
import os


img_paths = glob.glob('photos/*.jpeg')
for img_path in img_paths: 
    img = cv2.imread(img_path)

    idx = os.path.basename(img_path).split('.')[0]
    cv2.imwrite(os.path.join('photos', f'{idx}.webp'), img, [cv2.IMWRITE_WEBP_QUALITY, 80])
