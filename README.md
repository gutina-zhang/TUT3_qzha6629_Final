# 9103-TUT3-qzha6629_Audio-Individual-Assignment

# Project Description
This is an individual assignment for the IDEA9103 final project.  The owner of this repository is qzha6629. Our group selected Piet Mondrian's Broadway Boogie Woogie as our artwork. I utilised audio as the primary trigger for animating the overall vivid and dynamic work life and global surroundings. I aim to show viewer the society as assembly line with seek joy amidst sorrow through movements of rectangles and gradient color array.

# Interaction Instruction
Press the mouse button once.  The sounds and the movements commence simultaneously. The audio lyrics matches the movements. There are two pieces of music: the smooth one is to match the movement of small rectangles; the stronger lyric matches big rectangles. The audio tensity choose might also means the power of the authority.

# Animation of the Image 
The animation occurs among rectangles. 

# The Distinctiveness Compared to other Members
Audio: The rectangles have been refined and they modify and shift in accordance with the rhythmic patterns of the audio. The color of the thick lines changed into static gradient color, mainly compose by yellow, pink and blue.

Time: Independently modifying their locations over time to generate patterns and analogous configurations

Perlin noise and Randomness: Creating a brightness gradient in the small squares, while simultaneously producing random vertical stripes within the bigger colour blocks.

Interaction Input: Transpires via keyboard and mouse clicks.   Clicking on the squares in the image will produce a slide of randomly coloured sand grains, and hitting grains of the same colour will eliminate them.

# Inspiration
This audio edition reflects my own unique imagination.  The rapid pace of global living and working conditions prompts me to see this unfinished masterwork as a significant collective workspace.  I envisioned the small rectangles on the thick lines as diligent individuals, while the large rectangles represent governors, such as governmental bodies and corporate executives, tasked with enhancing the overall environment through administration and regulation.

![Nusra Latif Qureshi Birds in Far Pavilions](https://www.datocms-assets.com/42890/1702532743-202-2019-mm.jpg?dpr=1.5&fit=max&fm=webp&iptc=allow&w=1500)
Nusra Latif Qureshi: Birds in Far Pavilions 
![Nusra Latif Qureshi Birds in Far Pavilions](https://www.artgallery.nsw.gov.au/whats-on/exhibitions/nusra-latif-qureshi/)

I started to search similar topic which matches my assuption. This artwork further inspires me to consider how many individuals in society face numerous constraints, such as oversight from superiors, politicians, and extensive data surveillance.  These constraints are commonplace throughout our lives.  Nevertheless, despite an outwardly joyful and orderly existence, individuals are constrained by numerous factors.

Every coin has two sides; most individuals select to live their lives positively and joyfully.  They exert considerable effort and exist with their own luminosity.  Life is vibrant and orderly. The picture below inspires me the positivity of life: You cannot change it, so you brace it and to be happy. There are happy things in life, so to be happy and energetic. The birthday benediction event at the New South Wales Art Gallery allows visitors to compose blessing letters for strangers who share the same birthday, regardless of their location.  They obtain the letter and return new blessing letters.  Consequently, authenticity and joy consistently manifested within the community.
[References from Hikoko Ito Happy Birthday 2U2](https://www.artgallery.nsw.gov.au/whats-on/exhibitions/hikoko-ito/)

Hikoko Ito Happy Birthday 2U2
![Hikoko Ito Happy Birthday 2U2](https://www.datocms-assets.com/42890/1742248383-20250312hikoko_137_hero.jpg?dpr=0.75&fit=max&fm=webp&iptc=allow&w=2000)

![Hikoko Ito Happy Birthday 2U2](https://www.datocms-assets.com/42890/1742253895-happy-birthday-2u2-edit-2.jpg?dpr=1.5&fit=max&fm=webp&h=540&iptc=allow&max-w=1572864)

![Hikoko Ito Happy Birthday 2U2](https://www.datocms-assets.com/42890/1742253514-happy-birthday-2u2-edit.jpg?dpr=1.5&fit=max&fm=webp&h=540&iptc=allow&max-w=1572864)

I have a cheerful outlook on life, despite the imperfections encountered in society.  This highlights the significance of positivity and the necessity of safeguarding our energy.  I intend to utilise cheerful work music as the primary lyrics, supplemented by concise and impactful phrases to convey that while there are limitations, maintaining a good outlook on life is acceptable. 

The large rectangles have all been modified to identical sizes but varying colours:  The essence of power is straightforward; thus, do not fear and seek for daily happiness. In addition, the colour of the thick lines has been altered to signify that the road is a product of people's diligent efforts. The movement of little rectangles transitioning from pink or blue to yellow on the map demonstrates consistent maturation.  The pink and blue signify gender.

# Technical Explanation
```javascript <br>
// Yellow Rectangle
let yellowRects = [];
//* Array of objects that describe every yellow background line (x, y, w, h).

// Big rectangle
//* Array of large animated rectangles that bounce.
let bigRects = [];

// Audio
//* p5.SoundFile objects for SFX and background music.
let reboundSound;
let bgmSound;

let lerpColorsPair = [];
//* Array of colour-pairs used to build gradients.

// Gradient color array
let lerpColors = [];
//* Two-dimensional array; every inner list is a pre-computed gradient (800 colours) derived from one pair above.

// The signal whether the animation starts
let isStart = false;
//* Boolean flag: false by default, becomes true after first click.
<br>

1. I use yellowRects = [], bigRects = [] to define yellow, big rectangles respectively and change its parameter. The name of these code are clearly to distinguish compare to only using rects() and define its parameter.

2. reboundSound.play() is instantaneous and non-looping. It is used to add "rebound.m4a," because the big rectangles need to rebound among the white area.

3. bgmSound.loop() starts playback and repeats indefinitely until you call .stop() or refresh the page. I use it when adding "bgm.mp3." This is to serve for small rectangles' movement.

5. lerpColorsPair = [] is used to 18 pairs (pink ➜ yellow, blue ➜ yellow, …), and each pair will become one row in lerpColors.

6. lerpColors = [] + cList = [] makes the colour shifts smoothly from cList[0] on the far left to cList[1] on the far right.

7. 



