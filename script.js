var typed = new Typed('#typed-text', {
        strings: [
            'stunning websites.',
            'powerful web applications.',
            'engaging user experiences.',
            'digital solutions.'
        ],
        typeSpeed: 70,       // Speed of typing (in milliseconds)
        backSpeed: 30,       // Speed of backspacing (in milliseconds)
        backDelay: 1500,     // Delay before backspacing starts (in milliseconds)
        startDelay: 500,     // Delay before typing starts (in milliseconds)
        loop: true,          // Loop the animation indefinitely
        showCursor: true,    // Show the blinking cursor
        cursorChar: '|',     // Character for the cursor
        smartBackspace: true // Only backspace what doesn't match the next string
    });