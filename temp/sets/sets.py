import os

from PIL import Image


current_path = os.path.dirname(os.path.abspath(__file__))
images = os.listdir(current_path)

for image in images:
    
    if not image.endswith('.png'):
        continue
        
    image_path = os.path.join(current_path, image)
    print(f'Processing {image_path}...')
    
    # Open an image file
    with Image.open(image_path) as img:
        # Resize the image
        resized_img = img.resize((500, 500))
        
        # Save the image in WebP format
        output_image = image.replace('.png', '.webp')
        resized_img.save(output_image, 'webp')