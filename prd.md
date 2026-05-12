Product Requirement Document (PRD)
Immersive 3D Wedding Invitation Website
Colorful Cinematic Scroll Experience
1. Project Vision
Goal

Create a highly immersive, colorful, aesthetic, animation-heavy wedding invitation website for:

Lokesh Ramanan K & Kowsalya J

This is NOT a normal invitation website.

This should feel like:

A cinematic interactive experience
A modern luxury festival website
A creative portfolio
A dream-like romantic 3D environment

The user should feel:

Curiosity while scrolling
Emotional engagement
Visual excitement
Smooth interaction satisfaction
2. Product Philosophy

The previous version was:

Minimal
Elegant
Luxury

This version should be:

Vibrant
Energetic
Artistic
Immersive
Scroll-driven
Visually experimental

But here's the important part:

Do NOT make it look chaotic.

Most “creative” websites fail because:

Too many animations
Too many colors
Bad spacing
Motion overload
Laggy performance

The challenge:
Make it colorful WITHOUT becoming childish.

3. Core Features
Mandatory Features
Landing Experience
Fullscreen cinematic hero
Animated 3D environment
Dynamic gradients
Floating elements
Scroll-Based Storytelling

Entire website controlled by scrolling.

Sections transition like scenes in a movie.

Invitation Section
Animated typography
3D rotating cards
Floating flowers/light particles
Countdown Section
Animated countdown
Glassmorphism neon UI
Venue Section
Interactive map
Copy address
Open in Maps
Ending Section
Emotional cinematic ending
Floating particles/petals
Final greeting animation
4. Architecture
IMPORTANT

No backend.

No database.

No authentication.

No APIs required.

Everything static frontend.

Reason:
Using backend for this is wasted complexity.

This project is:

Visual storytelling
Frontend experience
Animation-focused

Not a SaaS product.

5. Recommended Tech Stack
Purpose	Technology
Framework	Next.js
Styling	Tailwind CSS
Animation	Framer Motion
3D Engine	Three.js
React 3D	React Three Fiber
3D Helpers	Drei
Scroll Engine	GSAP ScrollTrigger
Smooth Scroll	Lenis
Effects	React Bits / Custom shaders
Hosting	Vercel
6. UI / UX Direction
Theme
“Romantic Festival Dreamscape”

Visual feel:

Soft neon gradients
Dreamy floating elements
Dynamic lighting
Elegant 3D motion
Cinematic transitions

Think:

Spotify Wrapped animations
Awwwards-winning websites
Luxury fashion campaign pages
Music festival microsites
7. Visual Style
UI Style Combination
Style	Usage
Glassmorphism	Cards
Aurora Gradients	Backgrounds
Soft 3D	Decorative elements
Neon Glow	Buttons
Floating Particles	Atmosphere
Dynamic Blur	Transitions
Layered Depth	Scroll sections
8. Color System
Primary Palette
Usage	Color
Background Dark	#0F0C1A
Deep Purple	#5B3FD8
Electric Pink	#FF4FA3
Sunset Orange	#FF8A5B
Cyan Glow	#4DEBFF
Lavender	#B48CFF
Warm White	#F7F4FF
9. Gradient System
Aurora Gradient
background: linear-gradient(
135deg,
#5B3FD8,
#FF4FA3,
#FF8A5B,
#4DEBFF
);
Dream Gradient
background: radial-gradient(
circle at top left,
#FF4FA3,
transparent
),
radial-gradient(
circle at bottom right,
#4DEBFF,
transparent
),
#0F0C1A;
10. Typography
Font Strategy
Heading Font

Use:

Clash Display
OR
Satoshi

Modern luxury feel.

Romantic Accent Font

Use sparingly:

Great Vibes
OR
Brittany Signature

Only for couple names.

Too much script font destroys readability.

Body Font

Use:

Inter
OR
Poppins
11. Website Flow
Scroll Narrative Structure
Preloader
↓
3D Hero Scene
↓
Wedding Reveal
↓
Animated Invitation
↓
Love Quote Transition
↓
Countdown Experience
↓
Venue Journey
↓
Photo Memory Scene
↓
Final Blessings Scene
↓
Ending Animation
12. Preloader Experience
Goal

Make users instantly feel:
“This is different.”

Features
Animated initials
3D glowing ring
Loading particles
Background music fade-in
Animation
Morphing gradients
Smooth zoom transitions
Cinematic reveal
13. Hero Section
Main Attraction

This section determines whether users stay or leave.

Hero Features
Fullscreen 3D Scene

Include:

Floating flowers
Light particles
Animated glowing rings
Slow camera movement
Depth illusion
Main Text
A Celebration of Love
Lokesh & Kowsalya
28 May 2026
CTA
Enter Our Story
Animation System
Text reveal
3D depth motion
Floating layers
Scroll-triggered parallax
14. 3D Scroll Experience
IMPORTANT

Do NOT add random 3D objects.

Most developers ruin websites by adding unnecessary 3D.

3D should support emotion.

Recommended 3D Elements
Element	Purpose
Floating petals	Romance
Rotating rings	Marriage symbolism
Particle field	Atmosphere
Soft light orbs	Dream effect
Layered planes	Depth illusion
Avoid
Heavy 3D models
Complex physics
Unrealistic effects
Laggy rendering
15. Invitation Section
Features
Animated Card Reveal

Invitation appears with:

Blur reveal
Glow border
Floating animation
UI Style

Glassmorphism luxury card.

Content
You are invited to celebrate the wedding of
Lokesh Ramanan K
&
Kowsalya J
16. Scroll Animation System
Mandatory Animation Types
Animation	Usage
Parallax	Background depth
Blur Reveal	Headings
Scale Motion	Images
Floating Motion	Decorative assets
Pin Scroll	Hero transitions
Layer Fade	Scene changes
Glow Pulse	Buttons
Smooth Rotation	3D objects
17. Countdown Experience
Design Direction

Not a boring timer.

Make it feel futuristic + romantic.

Features
Neon glass cards
Animated number transitions
Glow pulse
Floating particles behind timer
Optional

Music beat synchronized pulse effect.

18. Venue Section
Features
Interactive Location Card
Embedded map
Copy address button
Open Maps button
UI Effects
Hover glow
Depth animation
Floating border gradients
19. Memory Gallery Section
Optional but Recommended
Layout

Horizontal cinematic scroll.

Features
Floating polaroid photos
Depth movement
Hover zoom
Light leak overlays
20. Ending Scene
Emotional Closure
Features
Floating petals
Slow fade-out
Romantic quote
Final thank-you message
Example
Thank you for being part of our forever.

With Love,
Lokesh & Kowsalya
21. Sound Design (Optional)
Background Music

Soft instrumental ambient music.

Must include:

Mute/unmute toggle

Do NOT autoplay loudly.

That’s amateur behavior.

22. Mobile Experience
CRITICAL

Most users will open on mobile.

3D-heavy websites often break mobile performance.

Mobile Optimization Rules
Reduce:
Particle count
Blur intensity
Shadow complexity
Animation frequency
Must Maintain
Smooth scrolling
Fast loading
Touch responsiveness
23. Performance Requirements
Metric	Target
Lighthouse Score	85+
First Load	<3 sec
Mobile FPS	Stable
Smooth Scroll	60 FPS
24. Optimization Strategy
Mandatory
Use:
WebP images
Lazy loading
Dynamic imports
Reduced polygon count
GPU-friendly transforms
Avoid
Large videos
Excessive shaders
Massive particle systems
25. Folder Structure
/src
  /components
  /3d
  /animations
  /sections
  /hooks
  /assets
  /styles
  /data
26. Recommended Components
Component	Purpose
HeroScene3D	Main hero
FloatingParticles	Atmosphere
InvitationCard	Invite
CountdownTimer	Timer
VenueSection	Location
MemoryGallery	Photos
MusicToggle	Audio
SmoothScrollProvider	Lenis
AuroraBackground	Dynamic gradients
27. Deployment
Recommended Hosting

Vercel

28. Development Timeline
Phase	Time
UI Design	2 Days
3D Scene Setup	2 Days
Scroll Animation	2 Days
Mobile Optimization	2 Days
Polish & Testing	1 Day

Total:

~9 Days
29. Final Product Expectations

The final website should feel:

Cinematic
Alive
Dreamy
Interactive
Artistic
Romantic
Smooth
Modern

NOT:

Cheap template
Overloaded
Laggy
Randomly animated
Cartoonish
Cringe “wedding card” design
30. Critical Design Principle

The biggest mistake people make:
They confuse “more effects” with “better experience.”

That’s false.

Good immersive websites control:

Pacing
Motion
Focus
Emotion
Visual hierarchy

The best experience is:

Smooth
Intentional
Balanced
Emotionally directed

Not visual chaos.