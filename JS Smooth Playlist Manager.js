const smoothPath = `${fb.ProfilePath}packages\\jssmooth\\`;

window.DefinePanel("JS Smooth Browser", { author: "origin by Br3tt aka Falstaff" });
include(smoothPath + "js\\JScommon.js");
include(smoothPath + "js\\JSinputbox.js");
include(smoothPath + "js\\jsspm.js");

/*
[Features]
 * order playlists by dragging items with the mouse
 * presets autoplaylists available
 * True Smooth Scrolling
 * Screen Touch support
 * Header bar at Top (can be hidden with CTRL+T)
 * Vertical Scrollbar (can be hidden with CTRL+B)
 * Filter box
 * Custom or Cover art Wallpaper as background supported (including a blur effect)
 * Windows scaling compliant (you can adjust zoom size in real time with CTRL+mousewheel)
 * Custom Panel Colors (in Properties window)
 * ... and more!

[Tips]
 * Hold SHIFT key + right click to display Configure script and panel Properties entries
 * Change colors and fonts in foobar2000 Preferences > DefaultUI or ColumsUI
 * Some minor settings can be changed in window Properties (SHIFT + right click > Properties), use it carefully
 * Right Click on items for contextual menu for the selection
 * CTRL+T to toggle the columns toolbar
 * CTRL+B to toggle the scrollbar
 * Hold CTRL + Mouse Wheel to scale elements (useful for 'retina' screens)
 * Hold SHIFT + Mouse Wheel to scale group header and so the cover art size
 * F2 key to rename selected/active playlist
 * ... etc
*/
