# Client-Side Programing and React

To tell Parcel which file in your project is the entry file (usually “index.html”); then, Parcel bundles all the files contained within that file into a single file before serving it back, ready to be viewed in a browser.
Parcel takes an entry file, lists all of its dependencies (and any dependencies of those dependencies), then builds a dependency tree of all the files. For each of the mapped files, Parcel detects their format and performs the necessary build operations on them (e.g., transpiling and/or minifying). As a final step, Parcel bundles everything into as few files as possible.
