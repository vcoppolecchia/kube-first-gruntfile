# Gruntfile & Kube: an example
This is how I wrote my first Gruntfile to work comfortably with the [Kube Framework](http://imperavi.com/kube/).
In this project I set up my environment to do some automation on tasks that I was used to manually perform.

### How this Gruntfile it's made
Here is the list of the ones I integrated in this first iteration of my real workflow:
1. clean
2. concat
3. uglify
4. less
5. autoprefixer
6. imagemin
7. watch

### What I liked the most (and you should too!)
Each one of the tasks listed above is really useful to forget about things that bore you (image compression, css/js minification, etc.), but the real turning point for me is the **autoprefixer** and the **watch** task.

### To sum up
What I've found very useful is [Chris Coyier's article](http://24ways.org/2013/grunt-is-not-weird-and-hard/) on 24ways: it's straightforward and gave me the basis to start diving into this wonderful piece of task automation software because, you (probably) know better than me, **we're not robots** and so we shouldn't behave like such!

I finally made this my mantra: **whenever possible, automate!**

Maybe things are messy or probably not at their best in terms of gruntfile best practices, but as this was my first iteration of this file I know it's setting the ground for *improvements* and, last but not least, I'm pretty satisfied with the results!