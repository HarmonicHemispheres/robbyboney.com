import os

def combine_files_to_txt(directory, output_file):
    # Open the output file for writing
    with open(output_file, 'w', encoding='utf-8') as txt_file:
        # Walk through the directory and its subdirectories
        for root, _, files in os.walk(directory):
            for file in files:
                # Check if the file has .html, .css, or .js extension
                if file.endswith(('.html', '.css', '.js')):
                    # Get the full path of the file
                    full_path = os.path.join(root, file)
                    # Write the file path to the output file
                    txt_file.write(f'File: {full_path}\n')
                    txt_file.write('-' * 80 + '\n')
                    # Open and read the content of the file
                    with open(full_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        # Write the content to the output file
                        txt_file.write(content + '\n')
                    txt_file.write('-' * 80 + '\n\n')

if __name__ == "__main__":
    # Define the directory to search and the output file name
    directory = input("Enter the directory to combine files from: ")
    output_file = input("Enter the output txt file name (e.g., combined_output.txt): ")
    
    # Combine the files into the specified txt file
    combine_files_to_txt(directory, output_file)
    print(f"All .html, .css, and .js files have been combined into '{output_file}'")