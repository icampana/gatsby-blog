#!/usr/bin/env python

import re

# Use the built-in version of scandir/walk if possible, otherwise
# use the scandir module version
try:
    from os import scandir, walk
except ImportError:
    from scandir import scandir, walk

from os import path, rename

#
prog = re.compile(r'http://ivan.campananaranjo.com/wp-content/([^)]+)\)', re.MULTILINE)

folders = [f.path for f in scandir('./content/posts') if f.is_dir()]

for folder in folders:
  files = [f.path for f in scandir(folder) if f.name.endswith(".md")]

  if files:
    filename = files[0]

    with open (filename, "r") as myfile:
      data=myfile.readlines()
      data=''.join(data)

    result = prog.findall(data)
    if result and len(result) >= 1:
      for image_path in result:
        new_filename = path.basename(image_path)
        original_path = './content/%s' % image_path
        new_path = '%s/%s' % (path.dirname(filename), new_filename)
        old_url = 'http://ivan.campananaranjo.com/wp-content/%s' % (image_path)
        new_url = './%s' % new_filename

        data = data.replace(old_url, new_url)
        if path.exists(original_path):
          print new_path
          rename(original_path, new_path)

      with open (filename, "w") as myfile:
        myfile.write(data)