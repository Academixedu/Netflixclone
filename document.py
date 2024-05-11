import os
import shutil

def copy_src_to_single_file(src_dir, output_file):
    with open(output_file, 'w') as outfile:
        for root, _, files in os.walk(src_dir):
            for file in files:
                file_path = os.path.join(root, file)
                # Check if the file is a PNG file, if so, skip it
                if file.lower().endswith('.png'):
                    continue
                # Writing path and filename to the output file
                outfile.write(f"Path: {os.path.relpath(file_path, src_dir)}\n")
                outfile.write(f"File: {file}\n")
                outfile.write("-" * 30 + "\n")
                # Writing content of the file to the output file
                with open(file_path, 'r') as infile:
                    shutil.copyfileobj(infile, outfile)
                outfile.write("\n" + "=" * 30 + "\n\n")

# Example usage:
src_directory = "src"
output_file = "output_file.txt"
copy_src_to_single_file(src_directory, output_file)
print(f"Content of src directory copied to {output_file}")
