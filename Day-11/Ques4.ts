// Question 4--. Recursive Navigation Type
// Scenario: You are building a tree structure for a file system or a sidebar menu.
// Task: Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional subFolders property, which is an array of FolderNode objects.

type FolderNode = {
     name: string;
     files?: string[];
     subFolders?: FolderNode[];
};

const rootFolder: FolderNode = {
     name: "Root",
     files: ["readme.txt"],

     subFolders: [
          {
               name: "Documents",
               files: ["resume.pdf", "jsnotes.docx"]
          },

          {
               name: "Images",
               subFolders: [
                    {
                        name: "Family",
                        files: ["home.png", "bike.jpg"] 
                    }

               ]
          }
     ]
};

console.log(rootFolder);

