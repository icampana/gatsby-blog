import frontmatter
import io
from os.path import basename, splitext, dirname, join
import glob
import json
import urllib.request

# Where are the files to modify
path = "content/posts/*/*.md"

wp_json = "http://ivan.campananaranjo.com/wp-json/wp/v2/posts?_fields=author,id,link,featured_media,featured_image_url&offset=300&per_page=100"

post_images = {}

with urllib.request.urlopen(wp_json) as response:
  data = json.loads( response.read() )

  for item in data:
    post_id = int(item['id'])
    if 'featured_image_url' in item:
      image_url = item['featured_image_url']
      post_images[post_id] = image_url

# Loop through all files
for fname in glob.glob(path):
    with io.open(fname, 'r') as f:
        # Parse file's front matter
        post = frontmatter.load(f)
        featuredImage = post.get('featuredImage')
        wordpressId = post.get('wordpress_id')

        if featuredImage == None and wordpressId > 0:
          if (wordpressId in post_images):
            print(wordpressId)
            image_url = post_images[wordpressId]
            image_fname = join(dirname(fname), basename(image_url))

            urllib.request.urlretrieve(image_url.replace("-1.", "."), image_fname)
            post['featuredImage'] = "./%s" % basename(image_url)

            # Save the modified file
            newfile = io.open(fname, 'wb')
            frontmatter.dump(post, newfile)
            newfile.close()
