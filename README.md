# projectjune
Redesign JuneHypnoBirthing website

Description
Learning front end web development by building my business website from scratch. Hoping to make 
it better than my current wordpress blog site (currently at JuneHypnoBirthing.com)

I want the new design to be more reflective of my style, more responsive, and easier to read and 
use for my clients; and I plan to continue working on it after code louisville class ends.



Custom CSS Classes
The class(es) I created are:

1. class name  .main-header 
Changes background color and Adds padding to .main-header section 

2. class name .main-nav
Formats navigation links: text color, padding, case, etc

3. class name .content
To add border styling to columns for use in media queries

4. class name .main-content
To format and flex the main content section of the page

5. class name .main-footer
To format footer


Custom JavaScript Functions
The javascript function(s) I created are:

1. function is toggling the Instructor Bio info when button is clicked
$("button").click(function(){
    $("#bio").toggle();
});
