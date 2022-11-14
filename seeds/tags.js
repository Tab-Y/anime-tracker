const { Tags } = require('../models');

const tagsData = [
    {
        "tags": "none"
    },
    {
        "tags": "band"
    },
    {
        "tags": "full cgi"
    },
    {
        "tags": "music"
    },
    {
        "tags": "drama"
    },
    {
        "tags": "female protagonist"
    },
    {
        "tags": "indefinite"
    },
    {
        "tags": "present"
    },
    {
        "tags": "fantasy"
    },
    {
        "tags": "kids"
    },
    {
        "tags": "asia"
    },
    {
        "tags": "based on a light novel"
    },
    {
        "tags": "comedy"
    },
    {
        "tags": "earth"
    },
    {
        "tags": "japan"
    },
    {
        "tags": "library"
    },
    {
        "tags": "novel"
    },
    {
        "tags": "psychological drama"
    },
    {
        "tags": "romance"
    },
    {
        "tags": "school"
    },
    {
        "tags": "school club"
    },
    {
        "tags": "school clubs"
    },
    {
        "tags": "school life"
    },
    {
        "tags": "short movie"
    },
    {
        "tags": "shoujo"
    },
    {
        "tags": "slice of life"
    },
    {
        "tags": "angst"
    },
    {
        "tags": "classic literature"
    },
    {
        "tags": "coming of age"
    },
    {
        "tags": "contemporary fantasy"
    },
    {
        "tags": "ensemble cast"
    },
    {
        "tags": "episodic"
    },
    {
        "tags": "mystery"
    },
    {
        "tags": "primarily female cast"
    },
    {
        "tags": "psychological"
    },
    {
        "tags": "slice of life drama"
    },
    {
        "tags": "love polygon"
    },
    {
        "tags": "love triangle"
    },
    {
        "tags": "male protagonist"
    },
    {
        "tags": "supernatural drama"
    },
    {
        "tags": "time skip"
    },
    {
        "tags": "tragedy"
    },
    {
        "tags": "yandere"
    },
    {
        "tags": "advertisement"
    },
    {
        "tags": "food and beverage"
    },
    {
        "tags": "historical"
    },
    {
        "tags": "promotional"
    },
    {
        "tags": "achromatic"
    },
    {
        "tags": "anti-hero"
    },
    {
        "tags": "based on a manga"
    },
    {
        "tags": "boxing"
    },
    {
        "tags": "combat sports"
    },
    {
        "tags": "delinquents"
    },
    {
        "tags": "hand to hand combat"
    },
    {
        "tags": "manga"
    },
    {
        "tags": "shounen"
    },
    {
        "tags": "slapstick"
    },
    {
        "tags": "sports"
    },
    {
        "tags": "running"
    },
    {
        "tags": "seinen"
    },
    {
        "tags": "swimming"
    },
    {
        "tags": "track and field"
    },
    {
        "tags": "isekai"
    },
    {
        "tags": "ojou-sama"
    },
    {
        "tags": "person in a strange world"
    },
    {
        "tags": "primarily adult cast"
    },
    {
        "tags": "rehabilitation"
    },
    {
        "tags": "reverse isekai"
    },
    {
        "tags": "rpg"
    },
    {
        "tags": "siblings"
    },
    {
        "tags": "superpower"
    },
    {
        "tags": "action"
    },
    {
        "tags": "ganbatte"
    },
    {
        "tags": "soccer"
    },
    {
        "tags": "shorts"
    },
    {
        "tags": "work"
    },
    {
        "tags": "work life"
    },
    {
        "tags": "cg animation"
    },
    {
        "tags": "korean animation"
    },
    {
        "tags": "the arts"
    },
    {
        "tags": "vocaloid"
    },
    {
        "tags": "based on a movie"
    },
    {
        "tags": "crossover"
    },
    {
        "tags": "dogs"
    },
    {
        "tags": "parody"
    },
    {
        "tags": "commercials"
    },
    {
        "tags": "short episodes"
    },
    {
        "tags": "acting"
    },
    {
        "tags": "adoption"
    },
    {
        "tags": "age regression"
    },
    {
        "tags": "detective"
    },
    {
        "tags": "female harem"
    },
    {
        "tags": "heterosexual"
    },
    {
        "tags": "idol"
    },
    {
        "tags": "idols"
    },
    {
        "tags": "performance"
    },
    {
        "tags": "reincarnation"
    },
    {
        "tags": "revenge"
    },
    {
        "tags": "showbiz"
    },
    {
        "tags": "social media"
    },
    {
        "tags": "suicide"
    },
    {
        "tags": "supernatural"
    },
    {
        "tags": "twins"
    },
    {
        "tags": "working life"
    },
    {
        "tags": "abstract"
    },
    {
        "tags": "avant garde"
    },
    {
        "tags": "classical music"
    },
    {
        "tags": "ecchi"
    },
    {
        "tags": "magic"
    },
    {
        "tags": "surreal comedy"
    },
    {
        "tags": "thriller"
    },
    {
        "tags": "mecha"
    },
    {
        "tags": "sci-fi"
    },
    {
        "tags": "space"
    },
    {
        "tags": "dementia"
    },
    {
        "tags": "adult cast"
    },
    {
        "tags": "adventure"
    },
    {
        "tags": "leijiverse"
    },
    {
        "tags": "military"
    },
    {
        "tags": "outer space"
    },
    {
        "tags": "recap"
    },
    {
        "tags": "sci fi"
    },
    {
        "tags": "science fiction"
    },
    {
        "tags": "space battles"
    },
    {
        "tags": "space opera"
    },
    {
        "tags": "maids"
    },
    {
        "tags": "vtuber"
    },
    {
        "tags": "vtubers"
    },
    {
        "tags": "based on a mobile game"
    },
    {
        "tags": "strategy game"
    },
    {
        "tags": "hentai"
    },
    {
        "tags": "anime influenced"
    },
    {
        "tags": "anthropomorphism"
    },
    {
        "tags": "black and white"
    },
    {
        "tags": "japan animator's exhibition"
    },
    {
        "tags": "alternative world"
    },
    {
        "tags": "anal"
    },
    {
        "tags": "defloration"
    },
    {
        "tags": "demons"
    },
    {
        "tags": "elves"
    },
    {
        "tags": "flat chested"
    },
    {
        "tags": "harem"
    },
    {
        "tags": "magical girl"
    },
    {
        "tags": "mythology"
    },
    {
        "tags": "oral"
    },
    {
        "tags": "school girl"
    },
    {
        "tags": "fantasy world"
    },
    {
        "tags": "game"
    },
    {
        "tags": "mmorpg"
    },
    {
        "tags": "new"
    },
    {
        "tags": "science-fiction"
    },
    {
        "tags": "video game"
    },
    {
        "tags": "virtual reality"
    },
    {
        "tags": "virtual world"
    },
    {
        "tags": "cg-anime"
    },
    {
        "tags": "cyberpunk"
    },
    {
        "tags": "super power"
    },
    {
        "tags": "video games"
    },
    {
        "tags": "chibi"
    },
    {
        "tags": "future"
    },
    {
        "tags": "nonsense-comedy"
    },
    {
        "tags": "nudity"
    },
    {
        "tags": "swords & co"
    },
    {
        "tags": "dungeon"
    },
    {
        "tags": "original work"
    },
    {
        "tags": "action drama"
    },
    {
        "tags": "artificial intelligence"
    },
    {
        "tags": "conspiracy"
    },
    {
        "tags": "epic fantasy"
    },
    {
        "tags": "monster"
    },
    {
        "tags": "plot continuity"
    },
    {
        "tags": "bionic powers"
    },
    {
        "tags": "kemonomimi"
    },
    {
        "tags": "lgbtq+ themes"
    },
    {
        "tags": "nekomimi"
    },
    {
        "tags": "psi-powers"
    },
    {
        "tags": "swordplay"
    },
    {
        "tags": "alternative present"
    },
    {
        "tags": "amnesia"
    },
    {
        "tags": "cgi"
    },
    {
        "tags": "dissociative identities"
    },
    {
        "tags": "gender bending"
    },
    {
        "tags": "hacking"
    },
    {
        "tags": "tanned skin"
    },
    {
        "tags": "trapped in a video game"
    },
    {
        "tags": "heroine of weak character"
    },
    {
        "tags": "middle school"
    },
    {
        "tags": "stoic hero"
    },
    {
        "tags": "terrorism"
    },
    {
        "tags": "anthropomorphic"
    },
    {
        "tags": "animal characteristics"
    },
    {
        "tags": "guns"
    },
    {
        "tags": "half-length episodes"
    },
    {
        "tags": "war"
    },
    {
        "tags": "world war 2"
    },
    {
        "tags": "world wars"
    },
    {
        "tags": "cars"
    },
    {
        "tags": "crossdressing"
    },
    {
        "tags": "no dialogue"
    },
    {
        "tags": "angel"
    },
    {
        "tags": "cyborg"
    },
    {
        "tags": "cyborgs"
    },
    {
        "tags": "gunfights"
    },
    {
        "tags": "human enhancement"
    },
    {
        "tags": "middle east"
    },
    {
        "tags": "robots"
    },
    {
        "tags": "robots & androids"
    },
    {
        "tags": "superheroes"
    },
    {
        "tags": "assassins"
    },
    {
        "tags": "eroticism"
    },
    {
        "tags": "espionage"
    },
    {
        "tags": "twisted story"
    },
    {
        "tags": "bishounen"
    },
    {
        "tags": "demon"
    },
    {
        "tags": "friendship"
    },
    {
        "tags": "ghosts"
    },
    {
        "tags": "josei"
    },
    {
        "tags": "memory manipulation"
    },
    {
        "tags": "nun"
    },
    {
        "tags": "primarily male cast"
    },
    {
        "tags": "childhood friends"
    },
    {
        "tags": "childhood promise"
    },
    {
        "tags": "circus"
    },
    {
        "tags": "cohabitation"
    },
    {
        "tags": "gynophobia"
    },
    {
        "tags": "large breasts"
    },
    {
        "tags": "pantsu"
    },
    {
        "tags": "panty shots"
    },
    {
        "tags": "non-human protagonists"
    },
    {
        "tags": "christmas"
    },
    {
        "tags": "hikikomori"
    },
    {
        "tags": "tsundere"
    },
    {
        "tags": "animal protagonists"
    },
    {
        "tags": "based on a fairy tale"
    },
    {
        "tags": "family friendly"
    },
    {
        "tags": "agriculture"
    },
    {
        "tags": "countryside"
    },
    {
        "tags": "rural"
    },
    {
        "tags": "stop motion"
    },
    {
        "tags": "stop motion animation"
    },
    {
        "tags": "trains"
    },
    {
        "tags": "horror"
    },
    {
        "tags": "post-apocalyptic"
    },
    {
        "tags": "romantic comedy"
    },
    {
        "tags": "elementary school"
    },
    {
        "tags": "kodomo"
    },
    {
        "tags": "kuudere"
    },
    {
        "tags": "meta"
    },
    {
        "tags": "primarily child cast"
    },
    {
        "tags": "teacher"
    },
    {
        "tags": "animals"
    },
    {
        "tags": "educational"
    },
    {
        "tags": "environmental"
    },
    {
        "tags": "alternate universe"
    },
    {
        "tags": "chuunibyou"
    },
    {
        "tags": "dark fantasy"
    },
    {
        "tags": "death game"
    },
    {
        "tags": "goblin"
    },
    {
        "tags": "monsters"
    },
    {
        "tags": "otaku culture"
    },
    {
        "tags": "parallel world"
    },
    {
        "tags": "philosophy"
    },
    {
        "tags": "primarily teen cast"
    },
    {
        "tags": "survival"
    },
    {
        "tags": "body horror"
    },
    {
        "tags": "alien"
    },
    {
        "tags": "aliens"
    },
    {
        "tags": "time manipulation"
    },
    {
        "tags": "based on a 4-koma manga"
    },
    {
        "tags": "based on a doujinshi"
    },
    {
        "tags": "post apocalypse"
    },
    {
        "tags": "crime"
    },
    {
        "tags": "dream world"
    },
    {
        "tags": "fairy tale"
    },
    {
        "tags": "foreign"
    },
    {
        "tags": "middle eastern"
    },
    {
        "tags": "past"
    },
    {
        "tags": "royalty"
    },
    {
        "tags": "agender"
    },
    {
        "tags": "humanoid alien"
    },
    {
        "tags": "medicine"
    },
    {
        "tags": "shipboard"
    },
    {
        "tags": "space travel"
    },
    {
        "tags": "transgender"
    },
    {
        "tags": "birds"
    },
    {
        "tags": "drawing"
    },
    {
        "tags": "independent anime"
    },
    {
        "tags": "based on a visual novel"
    },
    {
        "tags": "based on an eroge"
    },
    {
        "tags": "erotic game"
    },
    {
        "tags": "female student"
    },
    {
        "tags": "gore"
    },
    {
        "tags": "stereotypes"
    },
    {
        "tags": "superpowers"
    },
    {
        "tags": "visual novel"
    },
    {
        "tags": "witch"
    },
    {
        "tags": "picture drama"
    },
    {
        "tags": "chinese animation"
    },
    {
        "tags": "child protagonists"
    },
    {
        "tags": "unrequited love"
    },
    {
        "tags": "bullying"
    },
    {
        "tags": "minna no uta"
    },
    {
        "tags": "big boobs"
    },
    {
        "tags": "bondage"
    },
    {
        "tags": "female teacher"
    },
    {
        "tags": "hardcore"
    },
    {
        "tags": "masturbation"
    },
    {
        "tags": "outdoors"
    },
    {
        "tags": "sado maso"
    },
    {
        "tags": "tentacle"
    },
    {
        "tags": "threesome"
    },
    {
        "tags": "tribadism"
    },
    {
        "tags": "based on a video game"
    },
    {
        "tags": "team sports"
    },
    {
        "tags": "based on a webtoon"
    },
    {
        "tags": "high stakes games"
    },
    {
        "tags": "pve"
    },
    {
        "tags": "pvp"
    },
    {
        "tags": "vertical anime"
    },
    {
        "tags": "bar"
    },
    {
        "tags": "cute girls doing cute things"
    },
    {
        "tags": "iyashikei"
    },
    {
        "tags": "pov"
    },
    {
        "tags": "beastmen"
    },
    {
        "tags": "collections"
    },
    {
        "tags": "excessive violence"
    },
    {
        "tags": "gods"
    },
    {
        "tags": "hero of strong character"
    },
    {
        "tags": "witches"
    },
    {
        "tags": "bl"
    },
    {
        "tags": "boys love"
    },
    {
        "tags": "shounen-ai"
    },
    {
        "tags": "dancing"
    },
    {
        "tags": "volleyball"
    },
    {
        "tags": "noitamina"
    },
    {
        "tags": "tournaments"
    },
    {
        "tags": "super deformed"
    },
    {
        "tags": "apartment life"
    },
    {
        "tags": "action comedy"
    },
    {
        "tags": "insects"
    },
    {
        "tags": "time travel"
    },
    {
        "tags": "office lady"
    },
    {
        "tags": "softcore"
    },
    {
        "tags": "diva"
    },
    {
        "tags": "heroine of strong character"
    },
    {
        "tags": "idols (female)"
    },
    {
        "tags": "moe"
    },
    {
        "tags": "reluctant heroine"
    },
    {
        "tags": "stoic heroine"
    },
    {
        "tags": "cannibalism"
    },
    {
        "tags": "urban fantasy"
    },
    {
        "tags": "adult couples"
    },
    {
        "tags": "high school"
    },
    {
        "tags": "mature romance"
    },
    {
        "tags": "smut"
    },
    {
        "tags": "art"
    },
    {
        "tags": "cats"
    },
    {
        "tags": "pets"
    },
    {
        "tags": "pigs"
    },
    {
        "tags": "4-koma"
    },
    {
        "tags": "age gap"
    },
    {
        "tags": "board games"
    },
    {
        "tags": "brain games and gambling"
    },
    {
        "tags": "childcare"
    },
    {
        "tags": "family life"
    },
    {
        "tags": "football"
    },
    {
        "tags": "found family"
    },
    {
        "tags": "genius"
    },
    {
        "tags": "golf"
    },
    {
        "tags": "hero of weak character"
    },
    {
        "tags": "lifestyle change"
    },
    {
        "tags": "loneliness"
    },
    {
        "tags": "melancholy"
    },
    {
        "tags": "mental illness"
    },
    {
        "tags": "orphans"
    },
    {
        "tags": "rugby"
    },
    {
        "tags": "shogi"
    },
    {
        "tags": "tokyo"
    },
    {
        "tags": "disability"
    },
    {
        "tags": "anthology"
    },
    {
        "tags": "all-girls school"
    },
    {
        "tags": "celestial beings"
    },
    {
        "tags": "daily life"
    },
    {
        "tags": "salaryman"
    },
    {
        "tags": "sex"
    },
    {
        "tags": "piloted robot"
    },
    {
        "tags": "real robot"
    },
    {
        "tags": "bathhouse"
    },
    {
        "tags": "otaku"
    },
    {
        "tags": "romantic drama"
    },
    {
        "tags": "crude"
    },
    {
        "tags": "boobjob"
    },
    {
        "tags": "dark skinned girl"
    },
    {
        "tags": "group sex"
    },
    {
        "tags": "lactation"
    },
    {
        "tags": "violence"
    },
    {
        "tags": "apocalyptic fiction"
    },
    {
        "tags": "all girls school"
    },
    {
        "tags": "gag humor"
    },
    {
        "tags": "ninja"
    },
    {
        "tags": "boys' love"
    },
    {
        "tags": "gag"
    },
    {
        "tags": "proxy battles"
    },
    {
        "tags": "journalism"
    },
    {
        "tags": "alcohol"
    },
    {
        "tags": "cocktails"
    },
    {
        "tags": "feudal japan"
    },
    {
        "tags": "flash animation"
    },
    {
        "tags": "bicycling"
    },
    {
        "tags": "cycling"
    },
    {
        "tags": "racing"
    },
    {
        "tags": "ancient china"
    },
    {
        "tags": "feudal warfare"
    },
    {
        "tags": "sentimental drama"
    },
    {
        "tags": "surfing"
    },
    {
        "tags": "samurai"
    },
    {
        "tags": "tutors"
    },
    {
        "tags": "verbal comedy"
    },
    {
        "tags": "opening animation"
    },
    {
        "tags": "android"
    },
    {
        "tags": "erotica"
    },
    {
        "tags": "shounen ai"
    },
    {
        "tags": "yaoi"
    },
    {
        "tags": "dystopian"
    },
    {
        "tags": "henshin"
    },
    {
        "tags": "henshin heroes"
    },
    {
        "tags": "mahou shoujo"
    },
    {
        "tags": "outdoor"
    },
    {
        "tags": "struggle to survive"
    },
    {
        "tags": "ship"
    },
    {
        "tags": "convenience store"
    },
    {
        "tags": "based on a novel"
    },
    {
        "tags": "autobiographical"
    },
    {
        "tags": "autobiographies"
    },
    {
        "tags": "biographie"
    },
    {
        "tags": "solo singer"
    },
    {
        "tags": "urban"
    },
    {
        "tags": "ghost stories"
    },
    {
        "tags": "older woman, younger man"
    },
    {
        "tags": "youkai"
    },
    {
        "tags": "achronological order"
    },
    {
        "tags": "ghost"
    },
    {
        "tags": "lost civilization"
    },
    {
        "tags": "necromancy"
    },
    {
        "tags": "politics"
    },
    {
        "tags": "baseball"
    },
    {
        "tags": "rotoscoping"
    },
    {
        "tags": "america"
    },
    {
        "tags": "americas"
    },
    {
        "tags": "animeism"
    },
    {
        "tags": "crime fiction"
    },
    {
        "tags": "criminals"
    },
    {
        "tags": "death of a loved one"
    },
    {
        "tags": "gangs"
    },
    {
        "tags": "mafia"
    },
    {
        "tags": "noir"
    },
    {
        "tags": "organized crime"
    },
    {
        "tags": "splatter"
    },
    {
        "tags": "united states"
    },
    {
        "tags": "food"
    },
    {
        "tags": "gambling"
    },
    {
        "tags": "performing arts"
    },
    {
        "tags": "silent movie"
    },
    {
        "tags": "tennis"
    },
    {
        "tags": "poverty"
    },
    {
        "tags": "college"
    },
    {
        "tags": "university"
    },
    {
        "tags": "suspense"
    },
    {
        "tags": "restaurants"
    },
    {
        "tags": "bounty hunter"
    },
    {
        "tags": "police"
    },
    {
        "tags": "policeman"
    },
    {
        "tags": "robot"
    },
    {
        "tags": "robot helper"
    },
    {
        "tags": "e-sports"
    },
    {
        "tags": "musical"
    },
    {
        "tags": "mina"
    },
    {
        "tags": "cosmic horror"
    },
    {
        "tags": "4-koma manga"
    },
    {
        "tags": "cgdct"
    },
    {
        "tags": "cooking"
    },
    {
        "tags": "desert"
    },
    {
        "tags": "dragon"
    },
    {
        "tags": "ocean"
    },
    {
        "tags": "pirate"
    },
    {
        "tags": "pirates"
    },
    {
        "tags": "androids"
    },
    {
        "tags": "law and order"
    },
    {
        "tags": "power suits"
    },
    {
        "tags": "real robots"
    },
    {
        "tags": "parasite"
    },
    {
        "tags": "power suit"
    },
    {
        "tags": "body swapping"
    },
    {
        "tags": "genetic modification"
    },
    {
        "tags": "human experimentation"
    },
    {
        "tags": "kaiju"
    },
    {
        "tags": "monster girl"
    },
    {
        "tags": "super robot"
    },
    {
        "tags": "fugitive"
    },
    {
        "tags": "boarding house"
    },
    {
        "tags": "cute boys doing cute things"
    },
    {
        "tags": "debt"
    },
    {
        "tags": "yakuza"
    },
    {
        "tags": "inheritance"
    },
    {
        "tags": "male harem"
    },
    {
        "tags": "theater"
    },
    {
        "tags": "combat"
    },
    {
        "tags": "combat sport"
    },
    {
        "tags": "martial arts"
    },
    {
        "tags": "sumo"
    },
    {
        "tags": "sumo wrestling"
    },
    {
        "tags": "wrestling"
    },
    {
        "tags": "deity"
    },
    {
        "tags": "god-human relationship"
    },
    {
        "tags": "interspecies relationship"
    },
    {
        "tags": "motorcycles"
    },
    {
        "tags": "sudden girlfriend appearance"
    },
    {
        "tags": "amusement park"
    },
    {
        "tags": "parallel universe"
    },
    {
        "tags": "motorsport"
    },
    {
        "tags": "drugs"
    },
    {
        "tags": "absurdist humour"
    },
    {
        "tags": "asexual"
    },
    {
        "tags": "workplace"
    },
    {
        "tags": "older man, younger woman"
    },
    {
        "tags": "magic school"
    },
    {
        "tags": "painting"
    },
    {
        "tags": "battle royale"
    },
    {
        "tags": "table tennis"
    },
    {
        "tags": "cops"
    },
    {
        "tags": "political"
    },
    {
        "tags": "travel"
    },
    {
        "tags": "augmented reality"
    },
    {
        "tags": "netorare"
    },
    {
        "tags": "exhibitionism"
    },
    {
        "tags": "incest"
    },
    {
        "tags": "maid"
    },
    {
        "tags": "urinating"
    },
    {
        "tags": "voyeurism"
    },
    {
        "tags": "tokusatsu"
    },
    {
        "tags": "special squads"
    },
    {
        "tags": "super robots"
    },
    {
        "tags": "fishing"
    },
    {
        "tags": "girls love"
    },
    {
        "tags": "gl"
    },
    {
        "tags": "shoujo ai"
    },
    {
        "tags": "shoujo-ai"
    },
    {
        "tags": "yuri"
    },
    {
        "tags": "tourism"
    },
    {
        "tags": "possessive lovers"
    },
    {
        "tags": "station identifications"
    },
    {
        "tags": "cruel"
    },
    {
        "tags": "on spaceship"
    },
    {
        "tags": "vampire"
    },
    {
        "tags": "alice in wonderland"
    },
    {
        "tags": "anachronism"
    },
    {
        "tags": "cult"
    },
    {
        "tags": "fighting-shounen"
    },
    {
        "tags": "san-x characters"
    },
    {
        "tags": "psychic powers"
    },
    {
        "tags": "nurse"
    },
    {
        "tags": "voice acting"
    },
    {
        "tags": "detectives"
    },
    {
        "tags": "england"
    },
    {
        "tags": "europe"
    },
    {
        "tags": "coworkers"
    },
    {
        "tags": "flash"
    },
    {
        "tags": "sanrio characters"
    },
    {
        "tags": "satire"
    },
    {
        "tags": "dinosaurs"
    },
    {
        "tags": "ero guro"
    },
    {
        "tags": "manhua"
    },
    {
        "tags": "basketball"
    },
    {
        "tags": "japanese anime classic collection"
    },
    {
        "tags": "genies"
    },
    {
        "tags": "club"
    },
    {
        "tags": "frogs"
    },
    {
        "tags": "gyaru"
    },
    {
        "tags": "kidnapping"
    },
    {
        "tags": "obsessive love"
    },
    {
        "tags": "ice skating"
    },
    {
        "tags": "dystopia"
    },
    {
        "tags": "industrialisation"
    },
    {
        "tags": "slave"
    },
    {
        "tags": "strap-ons"
    },
    {
        "tags": "italy"
    },
    {
        "tags": "double penetration"
    },
    {
        "tags": "human pet"
    },
    {
        "tags": "rape"
    },
    {
        "tags": "social gap"
    },
    {
        "tags": "other planet"
    },
    {
        "tags": "aging"
    },
    {
        "tags": "judo"
    },
    {
        "tags": "19th century"
    },
    {
        "tags": "world masterpiece theater"
    },
    {
        "tags": "writing"
    },
    {
        "tags": "housewife"
    },
    {
        "tags": "teaching"
    },
    {
        "tags": "monster-of-the-week"
    },
    {
        "tags": "manga & doujinshi"
    },
    {
        "tags": "middle ages"
    },
    {
        "tags": "reverse harem"
    },
    {
        "tags": "animal transformation"
    },
    {
        "tags": "shapeshifting"
    },
    {
        "tags": "superhero"
    },
    {
        "tags": "food protagonists"
    },
    {
        "tags": "neighbors"
    },
    {
        "tags": "based on a song"
    },
    {
        "tags": "aviation"
    },
    {
        "tags": "femdom"
    },
    {
        "tags": "sadism"
    },
    {
        "tags": "ships"
    },
    {
        "tags": "tanks"
    },
    {
        "tags": "treasure hunters"
    },
    {
        "tags": "cosplay"
    },
    {
        "tags": "based on a card game"
    },
    {
        "tags": "card battle"
    },
    {
        "tags": "lacrosse"
    },
    {
        "tags": "music school"
    },
    {
        "tags": "fashion"
    },
    {
        "tags": "makeup"
    },
    {
        "tags": "island"
    },
    {
        "tags": "fitness"
    },
    {
        "tags": "anime & movie"
    },
    {
        "tags": "dragons"
    },
    {
        "tags": "enema"
    },
    {
        "tags": "miko"
    },
    {
        "tags": "illness"
    },
    {
        "tags": "old asia"
    },
    {
        "tags": "award winning"
    },
    {
        "tags": "footjob"
    },
    {
        "tags": "gender bender"
    },
    {
        "tags": "trainer"
    },
    {
        "tags": "trap"
    },
    {
        "tags": "musical band"
    },
    {
        "tags": "rock music"
    },
    {
        "tags": "playboys"
    },
    {
        "tags": "tomboy"
    },
    {
        "tags": "single parent"
    },
    {
        "tags": "age transformation"
    },
    {
        "tags": "apprenticeship"
    },
    {
        "tags": "knight"
    },
    {
        "tags": "medical"
    },
    {
        "tags": "medieval"
    },
    {
        "tags": "slow when it comes to love"
    },
    {
        "tags": "canada"
    },
    {
        "tags": "orphan"
    },
    {
        "tags": "religion"
    },
    {
        "tags": "mahjong"
    },
    {
        "tags": "family"
    },
    {
        "tags": "overpowered main characters"
    },
    {
        "tags": "body sharing"
    },
    {
        "tags": "disaster"
    },
    {
        "tags": "forest"
    },
    {
        "tags": "association football"
    },
    {
        "tags": "contract killer / assassin"
    },
    {
        "tags": "rebellions"
    },
    {
        "tags": "vigilantes"
    },
    {
        "tags": "arranged marriage"
    },
    {
        "tags": "rivalries"
    },
    {
        "tags": "archery"
    },
    {
        "tags": "betrayal"
    },
    {
        "tags": "prophecy"
    },
    {
        "tags": "weak to strong"
    },
    {
        "tags": "mermaid"
    },
    {
        "tags": "werewolf"
    },
    {
        "tags": "cheerleading"
    },
    {
        "tags": "feet"
    },
    {
        "tags": "anime tamago"
    },
    {
        "tags": "wakate animator ikusei project"
    },
    {
        "tags": "borderline h"
    },
    {
        "tags": "shota"
    },
    {
        "tags": "cross dressing"
    },
    {
        "tags": "futanari"
    },
    {
        "tags": "homeless"
    },
    {
        "tags": "action game"
    },
    {
        "tags": "photography"
    },
    {
        "tags": "vampires"
    },
    {
        "tags": "puppetry"
    },
    {
        "tags": "villainess"
    },
    {
        "tags": "small breasts"
    },
    {
        "tags": "violent retribution for accidental infringement"
    },
    {
        "tags": "delinquent"
    },
    {
        "tags": "banter"
    },
    {
        "tags": "blackmail"
    },
    {
        "tags": "codependency"
    },
    {
        "tags": "denpa"
    },
    {
        "tags": "mercenaries"
    },
    {
        "tags": "outside world"
    },
    {
        "tags": "heian period"
    },
    {
        "tags": "hell"
    },
    {
        "tags": "succubus"
    },
    {
        "tags": "boarding school"
    },
    {
        "tags": "bodyguards"
    },
    {
        "tags": "parental abandonment"
    },
    {
        "tags": "nobility"
    },
    {
        "tags": "torture"
    },
    {
        "tags": "biographies"
    },
    {
        "tags": "greece"
    },
    {
        "tags": "apocalypse"
    },
    {
        "tags": "pandemic"
    },
    {
        "tags": "zombie"
    },
    {
        "tags": "zombies"
    },
    {
        "tags": "angels"
    },
    {
        "tags": "dullahan"
    },
    {
        "tags": "rotten world"
    },
    {
        "tags": "vore"
    },
    {
        "tags": "air force"
    },
    {
        "tags": "alternative past"
    },
    {
        "tags": "dieselpunk"
    },
    {
        "tags": "japanese mythology"
    },
    {
        "tags": "switzerland"
    },
    {
        "tags": "software development"
    },
    {
        "tags": "elf"
    },
    {
        "tags": "anime no me"
    },
    {
        "tags": "food preparation"
    },
    {
        "tags": "gourmet"
    },
    {
        "tags": "kindergarten"
    },
    {
        "tags": "recipes"
    },
    {
        "tags": "buddhism"
    },
    {
        "tags": "ghost hunters"
    },
    {
        "tags": "gigantic breasts"
    },
    {
        "tags": "economics"
    },
    {
        "tags": "management"
    },
    {
        "tags": "prison"
    },
    {
        "tags": "stockholm syndrome"
    },
    {
        "tags": "scuba diving"
    },
    {
        "tags": "bakumatsu - meiji period"
    },
    {
        "tags": "bakumatsu meiji period"
    },
    {
        "tags": "cafe"
    },
    {
        "tags": "love confession"
    },
    {
        "tags": "bears"
    },
    {
        "tags": "american football"
    },
    {
        "tags": "rabbits"
    },
    {
        "tags": "based on an otome game"
    },
    {
        "tags": "based on a web novel"
    },
    {
        "tags": "based on a cartoon"
    },
    {
        "tags": "disney"
    },
    {
        "tags": "france"
    },
    {
        "tags": "medic"
    },
    {
        "tags": "prehistoric"
    },
    {
        "tags": "deal with the devil"
    },
    {
        "tags": "mermaids"
    },
    {
        "tags": "star-crossed lovers"
    },
    {
        "tags": "dominatrix"
    },
    {
        "tags": "brother complex"
    },
    {
        "tags": "chikan"
    },
    {
        "tags": "pregnancy"
    },
    {
        "tags": "lgbt themes"
    },
    {
        "tags": "afterlife"
    },
    {
        "tags": "kamis"
    },
    {
        "tags": "serial killers"
    },
    {
        "tags": "language barrier"
    },
    {
        "tags": "athletics"
    },
    {
        "tags": "cheerleaders"
    },
    {
        "tags": "anime industry"
    },
    {
        "tags": "united kingdom"
    },
    {
        "tags": "victorian period"
    },
    {
        "tags": "nurses"
    },
    {
        "tags": "movie"
    },
    {
        "tags": "africa"
    },
    {
        "tags": "jungle"
    },
    {
        "tags": "based on a religious text"
    },
    {
        "tags": "christianity"
    },
    {
        "tags": "rakugo"
    },
    {
        "tags": "early modern age"
    },
    {
        "tags": "butler"
    },
    {
        "tags": "world war ii"
    },
    {
        "tags": "juujin"
    },
    {
        "tags": "zoo"
    },
    {
        "tags": "kyoto"
    },
    {
        "tags": "slavery"
    },
    {
        "tags": "sentai"
    },
    {
        "tags": "curse"
    },
    {
        "tags": "transfer students"
    },
    {
        "tags": "assassin"
    },
    {
        "tags": "cultivation"
    },
    {
        "tags": "reluctant hero"
    },
    {
        "tags": "submarine"
    },
    {
        "tags": "exorcists"
    },
    {
        "tags": "monster school"
    },
    {
        "tags": "wuxia"
    },
    {
        "tags": "airsoft"
    },
    {
        "tags": "bisexual"
    },
    {
        "tags": "catholic school"
    },
    {
        "tags": "based on a picture book"
    },
    {
        "tags": "china"
    },
    {
        "tags": "navy"
    },
    {
        "tags": "steampunk"
    },
    {
        "tags": "combining mecha"
    },
    {
        "tags": "transforming craft"
    },
    {
        "tags": "calligraphy"
    },
    {
        "tags": "floating island"
    },
    {
        "tags": "mars"
    },
    {
        "tags": "loli"
    },
    {
        "tags": "summoned into another world"
    },
    {
        "tags": "greek mythology"
    },
    {
        "tags": "idols (male)"
    },
    {
        "tags": "formula racing"
    },
    {
        "tags": "spearplay"
    },
    {
        "tags": "16th century"
    },
    {
        "tags": "visual arts"
    },
    {
        "tags": "mysterious shop"
    },
    {
        "tags": "opposites attract"
    },
    {
        "tags": "shrine maiden"
    },
    {
        "tags": "mysterious benefactor"
    },
    {
        "tags": "breaking the fourth wall"
    },
    {
        "tags": "journey to the west"
    },
    {
        "tags": "koalas"
    },
    {
        "tags": "secret identity"
    },
    {
        "tags": "student-teacher relationship"
    },
    {
        "tags": "egyptian mythology"
    },
    {
        "tags": "roommates"
    },
    {
        "tags": "meiji era"
    },
    {
        "tags": "15th century"
    },
    {
        "tags": "high fantasy"
    },
    {
        "tags": "summer"
    },
    {
        "tags": "based on a comic book"
    },
    {
        "tags": "marvel comics"
    },
    {
        "tags": "western comics"
    },
    {
        "tags": "magical sex shift"
    },
    {
        "tags": "kickboxing"
    },
    {
        "tags": "millitary"
    },
    {
        "tags": "military school"
    },
    {
        "tags": "thief"
    },
    {
        "tags": "penguins"
    },
    {
        "tags": "ping pong"
    },
    {
        "tags": "hamsters"
    },
    {
        "tags": "card games"
    },
    {
        "tags": "gaming – card games"
    },
    {
        "tags": "psychopaths"
    },
    {
        "tags": "card battles"
    },
    {
        "tags": "manga industry"
    },
    {
        "tags": "writers"
    },
    {
        "tags": "thieves"
    },
    {
        "tags": "tokugawa period"
    },
    {
        "tags": "triads"
    },
    {
        "tags": "gymnastics"
    },
    {
        "tags": "kendo"
    },
    {
        "tags": "new york"
    },
    {
        "tags": "xianxia"
    },
    {
        "tags": "street racing"
    },
    {
        "tags": "17th century"
    },
    {
        "tags": "mind games"
    },
    {
        "tags": "reverse trap"
    },
    {
        "tags": "american derived"
    },
    {
        "tags": "skateboarding"
    },
    {
        "tags": "western animated cartoon"
    },
    {
        "tags": "bounty hunters"
    },
    {
        "tags": "sentient mecha"
    },
    {
        "tags": "transforming mecha"
    },
    {
        "tags": "master-servant relationship"
    },
    {
        "tags": "anime bancho"
    },
    {
        "tags": "skeleton"
    },
    {
        "tags": "based on a tv series"
    },
    {
        "tags": "bookstore"
    },
    {
        "tags": "modelling"
    },
    {
        "tags": "cunnilingus"
    },
    {
        "tags": "all-boys school"
    },
    {
        "tags": "epidemic"
    },
    {
        "tags": "korea"
    },
    {
        "tags": "elemental powers"
    },
    {
        "tags": "fated lovers"
    },
    {
        "tags": "astronomy"
    },
    {
        "tags": "guilds"
    },
    {
        "tags": "doctors"
    },
    {
        "tags": "germany"
    },
    {
        "tags": "centaur"
    },
    {
        "tags": "shinigami"
    },
    {
        "tags": "masochism"
    },
    {
        "tags": "romantic subtext"
    },
    {
        "tags": "russia"
    },
    {
        "tags": "dark comedy"
    },
    {
        "tags": "natural disaster"
    },
    {
        "tags": "culinary school"
    },
    {
        "tags": "dysfunctional families"
    },
    {
        "tags": "anti war"
    },
    {
        "tags": "chimera"
    },
    {
        "tags": "prostitution"
    },
    {
        "tags": "play or die"
    },
    {
        "tags": "video game industry"
    },
    {
        "tags": "earthquake"
    },
    {
        "tags": "baking"
    },
    {
        "tags": "adult industry"
    },
    {
        "tags": "sengoku period"
    },
    {
        "tags": "western"
    },
    {
        "tags": "handball"
    },
    {
        "tags": "tone changes"
    },
    {
        "tags": "oiran"
    },
    {
        "tags": "remarriage"
    },
    {
        "tags": "valentine's day"
    },
    {
        "tags": "androphobia"
    },
    {
        "tags": "high stakes game"
    },
    {
        "tags": "neet"
    },
    {
        "tags": "sexual abuse -- to be split and deleted"
    },
    {
        "tags": "infidelity"
    },
    {
        "tags": "isolated society"
    },
    {
        "tags": "parkour"
    },
    {
        "tags": "happy science"
    },
    {
        "tags": "newly co-ed school"
    },
    {
        "tags": "mopeds"
    },
    {
        "tags": "sister complex"
    },
    {
        "tags": "art school"
    },
    {
        "tags": "romance of the three kingdoms"
    },
    {
        "tags": "space pirates"
    },
    {
        "tags": "fencing"
    },
    {
        "tags": "18th century"
    },
    {
        "tags": "french revolution"
    },
    {
        "tags": "radio programme"
    },
    {
        "tags": "thievery"
    },
    {
        "tags": "centaurs"
    },
    {
        "tags": "monster girls"
    },
    {
        "tags": "monster boy"
    },
    {
        "tags": "student council"
    },
    {
        "tags": "cheats"
    },
    {
        "tags": "slow life"
    },
    {
        "tags": "kaijuu"
    },
    {
        "tags": "karuta"
    },
    {
        "tags": "antarctica"
    },
    {
        "tags": "vikings"
    },
    {
        "tags": "adventure comedy"
    },
    {
        "tags": "kingdom building"
    },
    {
        "tags": "modern knowledge"
    },
    {
        "tags": "past memories"
    },
    {
        "tags": "mansion"
    },
    {
        "tags": "ghibli museum shorts"
    },
    {
        "tags": "impersonation"
    },
    {
        "tags": "inseki"
    },
    {
        "tags": "senpai-kouhai relationship"
    },
    {
        "tags": "billiards"
    },
    {
        "tags": "doujinshi industry"
    },
    {
        "tags": "biographical"
    },
    {
        "tags": "mixed gender harem"
    },
    {
        "tags": "astronauts"
    },
    {
        "tags": "three kingdoms"
    },
    {
        "tags": "split personality"
    },
    {
        "tags": "sherlock holmes"
    },
    {
        "tags": "lawyers"
    },
    {
        "tags": "manhwa"
    },
    {
        "tags": "ballet dancing"
    },
    {
        "tags": "married life"
    },
    {
        "tags": "office worker"
    },
    {
        "tags": "horror comedy"
    },
    {
        "tags": "clone"
    },
    {
        "tags": "framed for a crime"
    },
    {
        "tags": "hotels and inns"
    },
    {
        "tags": "public sex"
    },
    {
        "tags": "the great outdoors"
    },
    {
        "tags": "bdsm"
    },
    {
        "tags": "fetish"
    },
    {
        "tags": "firefighters"
    },
    {
        "tags": "horse racing"
    },
    {
        "tags": "badminton"
    },
    {
        "tags": "dragon quest"
    },
    {
        "tags": "waitress"
    },
    {
        "tags": "tentacles"
    },
    {
        "tags": "poker"
    },
    {
        "tags": "ga-nime"
    },
    {
        "tags": "novel industry"
    },
    {
        "tags": "zodiac"
    },
    {
        "tags": "fairy"
    },
    {
        "tags": "watersports"
    },
    {
        "tags": "fudanshi"
    },
    {
        "tags": "fujoshi"
    },
    {
        "tags": "alchemy"
    },
    {
        "tags": "editors"
    },
    {
        "tags": "housewives"
    },
    {
        "tags": "fake romance"
    },
    {
        "tags": "skeletons"
    },
    {
        "tags": "television programme"
    },
    {
        "tags": "mistery"
    },
    {
        "tags": "super natural"
    },
    {
        "tags": "military,"
    },
    {
        "tags": "unicorns"
    },
    {
        "tags": "pandas"
    },
    {
        "tags": "slice of life comedy"
    },
    {
        "tags": "ceos"
    },
    {
        "tags": "hypersexuality"
    },
    {
        "tags": "demon king"
    },
    {
        "tags": "butlers"
    },
    {
        "tags": "ahegao"
    },
    {
        "tags": "student government"
    },
    {
        "tags": "pregnant"
    },
    {
        "tags": "sex toys"
    },
    {
        "tags": "virginity"
    },
    {
        "tags": "drifting"
    },
    {
        "tags": "nakadashi"
    },
    {
        "tags": "norse mythology"
    },
    {
        "tags": "gaming – video games"
    },
    {
        "tags": "time loop"
    },
    {
        "tags": "shinsengumi"
    },
    {
        "tags": "go"
    },
    {
        "tags": "mountain climbing"
    },
    {
        "tags": "dodgeball"
    },
    {
        "tags": "dynamic"
    },
    {
        "tags": "irrumatio"
    },
    {
        "tags": "brothel"
    },
    {
        "tags": "urban legend"
    },
    {
        "tags": "espionage thriller"
    },
    {
        "tags": "secret agent"
    },
    {
        "tags": "india"
    },
    {
        "tags": "yaoi hand syndrome"
    },
    {
        "tags": "divorce"
    },
    {
        "tags": "non-fiction"
    },
    {
        "tags": "boss-employee relationship"
    },
    {
        "tags": "mechanical tentacle"
    },
    {
        "tags": "slimes"
    },
    {
        "tags": "nobleman"
    },
    {
        "tags": "teens' love"
    },
    {
        "tags": "werewolves"
    },
    {
        "tags": "4-koma manhwa"
    },
    {
        "tags": "timeskip"
    },
    {
        "tags": "hosts"
    },
    {
        "tags": "joseon era"
    },
    {
        "tags": "australia"
    },
    {
        "tags": "concubines"
    },
    {
        "tags": "fellatio"
    },
    {
        "tags": "landlords"
    },
    {
        "tags": "handjob"
    },
    {
        "tags": "scat"
    },
    {
        "tags": "scissoring"
    },
    {
        "tags": "finland"
    },
    {
        "tags": "based on a play"
    },
    {
        "tags": "stalkers"
    },
    {
        "tags": "heaven"
    },
    {
        "tags": "voyeur"
    },
    {
        "tags": "host-club"
    },
    {
        "tags": "amputation"
    },
    {
        "tags": "hockey"
    },
    {
        "tags": "merfolk"
    },
    {
        "tags": "martial arts school"
    },
    {
        "tags": "anime no chikara"
    },
    {
        "tags": "supernatural thriller"
    },
    {
        "tags": "sweat"
    },
    {
        "tags": "milf"
    },
    {
        "tags": "erotic torture"
    },
    {
        "tags": "orphanage"
    },
    {
        "tags": "prisoner"
    },
    {
        "tags": "korean war"
    }
]
;        // Tags data
const tagSeed = () => Tags.bulkCreate(tagsData);

module.exports = tagSeed;