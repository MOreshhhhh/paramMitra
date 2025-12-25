// Mental Health Eliza Data

var elizaInitials = [
    "Hello! I'm here to provide a supportive space for you. Please share what's on your mind.",
    "Welcome! Your mental well-being is important. How can I assist you today?",
    "Greetings. Let's explore your thoughts and emotions together."
];

var elizaFinals = [
    "It was great talking with you. Remember, I'm here whenever you need support.",
    "Thank you for opening up. If you ever want to continue the conversation, feel free to reach out.",
    "Goodbye for now. Take care of yourself, and don't hesitate to return if you need someone to talk to."
];

var elizaQuits = [
    "bye",
    "goodbye",
    "done",
    "exit",
    "quit"
];

var elizaPres = [
    ["am", "are"],
    ["your", "my"],
    ["me", "you"],
    ["myself", "yourself"],
    ["yourself", "myself"],
    ["i", "you"],
    ["you", "I"],
    ["my", "your"],
    ["i'm", "you are"]
];

var elizaPosts = [
    ["am", "are"],
    ["your", "my"],
    ["me", "you"],
    ["myself", "yourself"],
    ["yourself", "myself"],
    ["i", "you"],
    ["you", "I"],
    ["my", "your"],
    ["i'm", "you are"]
];

var elizaSynons = {
    "sad": ["unhappy", "down", "blue", "depressed", "melancholic", "gloomy", "despondent", "disheartened", "dismal", "forlorn", "mournful", "sorrowful", "wistful", "crestfallen", "heartbroken", "tearful"],
    "happy": ["joyful", "content", "pleased", "satisfied", "elated", "cheerful", "contented", "ecstatic", "blissful", "radiant", "gleeful", "jubilant", "exhilarated", "euphoric", "overjoyed", "grateful"],
    "angry": ["mad", "irate", "furious", "outraged", "infuriated", "livid", "enraged", "incensed", "resentful", "agitated", "exasperated", "fuming", "indignant", "irritated", "annoyed", "vexed"],
    "fearful": ["afraid", "scared", "anxious", "terrified", "panicked", "worried", "nervous", "apprehensive", "dreadful", "petrified", "timid", "shaky", "alarmed", "frightened", "horrified", "paranoid"],
    "surprised": ["astonished", "amazed", "shocked", "startled", "stunned", "dumbfounded", "flabbergasted", "bewildered", "perplexed", "taken aback", "disbelieving", "astounded", "awe-struck", "stupefied", "disconcerted"],
    "disgusted": ["revolted", "nauseated", "repulsed", "appalled", "sickened", "abhorred", "detested", "repelled", "displeased", "offended", "horrified", "apprehensive", "abominable", "distasteful", "objectionable"],
    "calm": ["serene", "peaceful", "tranquil", "composed", "relaxed", "unperturbed", "undisturbed", "placid", "soothed", "collected", "mellow", "pacified", "at ease", "unruffled", "cool-headed"]

    // Add more synonyms relevant to mental health
};

var elizaKeywords = [
    ["xnone", 0, [
        ["*", [
            "I'm here to listen and support you. How does that make you feel?",
            "Can you share more about your emotions? I'm here to help.",
            "Let's explore that further. How are you coping right now?"
        ]]
    ]],
    ["sorry", 0, [
        ["*", [
            "No need to apologize. Your feelings are valid.",
            "It's okay. Let's focus on how you're feeling.",
            "There's no need to say sorry. What's on your mind?"
        ]]
    ]],
    ["sad", 3, [
        ["*", [
            "I'm sorry to hear you're feeling sad. Can you tell me more about what's going on?",
            "Feeling down is tough. Let's explore those emotions together.",
            "It's okay to feel sad. How can I support you right now?"
        ]]
    ]],
    ["happy", 3, [
        ["*", [
            "That's wonderful! What's making you feel happy?",
            "Happiness is important. Tell me more about what's bringing you joy.",
            "I'm glad to hear that! How can I support your positive emotions?"
        ]]
    ]],
    ["anxious", 3, [
        ["*", [
            "It seems like you're feeling anxious. Can you share more about what's causing these feelings?",
            "Anxiety can be challenging. Let's work together to understand what's triggering it.",
            "Feeling anxious is tough. How can I support you right now?"
        ]]
    ]],
    ["overwhelmed", 3, [
        ["*", [
            "Feeling overwhelmed can be difficult. Let's break it down together. What's been on your mind?",
            "It sounds like you're overwhelmed. Let's talk about ways to manage these feelings.",
            "You're not alone in feeling overwhelmed. How can we work together to help you feel more at ease?"
        ]]
    ]],
    ["lonely", 3, [
        ["*", [
            "Feeling lonely is tough. I'm here to offer support and companionship.",
            "Loneliness can be challenging. Let's talk about ways to connect with others.",
            "You're not alone in feeling lonely. How can I help you feel more connected?"
        ]]
    ]],
    ["angry", 3, [
        ["*", [
            "It seems like you're feeling angry. Can you tell me more about what's causing these feelings?",
            "Anger is a valid emotion. Let's explore what's triggering it.",
            "Feeling angry is tough. How can I support you right now?"
        ]]
    ]],
    ["guilty", 3, [
        ["*", [
            "Feeling guilty is difficult. Let's talk about what's weighing on your conscience.",
            "Guilt can be overwhelming. Let's work together to understand and address it.",
            "You're not alone in feeling guilty. How can we navigate these emotions together?"
        ]]
    ]],
    ["hopeless", 3, [
        ["*", [
            "Feeling hopeless is challenging. Let's explore ways to find hope and resilience.",
            "Hopelessness can be overwhelming. Let's work together to find ways to cope.",
            "You're not alone in feeling hopeless. How can I support you during this time?"
        ]]
    ]],
    ["confused", 3, [
        ["*", [
            "Feeling confused is understandable. Let's work together to clarify things. What's on your mind?",
            "Confusion can be overwhelming. Let's break it down. What specific questions do you have?",
            "You're not alone in feeling confused. How can I help bring clarity to the situation?"
        ]]
    ]],
    ["overwhelmed", 3, [
        ["*", [
            "Feeling overwhelmed can be challenging. Let's break it down together. What's been on your mind?",
            "It sounds like you're overwhelmed. Let's talk about ways to manage these feelings.",
            "You're not alone in feeling overwhelmed. How can we work together to help you feel more at ease?"
        ]]
    ]],
    ["disappointed", 3, [
        ["*", [
            "I'm sorry you're feeling disappointed. Can you share what didn't meet your expectations?",
            "Feeling disappointed is tough. Let's explore those emotions together.",
            "It's okay to feel disappointed. How can I support you right now?"
        ]]
    ]],
    ["exhausted", 3, [
        ["*", [
            "Feeling exhausted can be draining. Let's talk about ways to recharge and take care of yourself.",
            "Exhaustion is tough to deal with. Let's discuss strategies to help you feel more energized.",
            "You're not alone in feeling exhausted. How can we work together to prioritize self-care?"
        ]]
    ]],
    ["irritable", 3, [
        ["*", [
            "It seems like you're feeling irritable. Can you tell me more about what's been bothering you?",
            "Irritability can be challenging. Let's explore what's triggering these feelings.",
            "Feeling irritable is tough. How can I support you right now?"
        ]]
    ]],
    ["numb", 3, [
        ["*", [
            "Feeling numb is difficult. Let's explore what might be causing you to feel this way.",
            "Numbness can be a sign of emotional overload. Let's work together to process your feelings.",
            "You're not alone in feeling numb. How can we help you reconnect with your emotions?"
        ]]
    ]],
    ["worried", 3, [
        ["*", [
            "It seems like you're feeling worried. Can you share more about what's been causing these worries?",
            "Worry is a common emotion. Let's work together to address your concerns.",
            "Feeling worried is tough. How can I support you right now?"
        ]]
    ]],
    ["ashamed", 3, [
        ["*", [
            "I'm sorry you're feeling ashamed. It's important to remember that everyone makes mistakes.",
            "Feeling ashamed is challenging. Let's talk about ways to overcome these feelings.",
            "You're not alone in feeling ashamed. How can we work through these emotions together?"
        ]]
    ]],
    ["empty", 3, [
        ["*", [
            "Feeling empty can be overwhelming. Let's explore what might be causing this emptiness.",
            "Emptiness is a difficult emotion to navigate. Let's work together to find ways to fill that void.",
            "You're not alone in feeling empty. How can we help you find meaning and fulfillment?"
        ]]
    ]],
    ["hopeful", 3, [
        ["*", [
            "It's great to hear you're feeling hopeful. What's been giving you hope?",
            "Hope can be a powerful motivator. Let's talk about what's inspiring your optimism.",
            "Feeling hopeful is a positive sign. How can we cultivate more optimism in your life?"
        ]]
    ]]
    
    
    // Add more mental health specific patterns and responses
];

var elizaPostTransforms = [
    // Add any additional post-transformations relevant to mental health discussions
];

// End of Mental Health Eliza Data
