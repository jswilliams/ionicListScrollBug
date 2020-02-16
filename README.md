# ionicListScrollBug

If you start scrolling the list with a flick, you can tap the screen before the scrolling finished to make the scrolling stop early.

The problem is in Ionic 5, on a physical Android device, the tap to stop the scrolling also calls the (click) of any element underneath where you tapped.

The expected behavior would be for that tap to only stop the scrolling and not carry through to elements. It worked this way in Ionic 4. In Ionic 5 it still works that way on iOS but it's carrying the click through to other elements on Android.
