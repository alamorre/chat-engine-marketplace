export const projectID = process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID

export const sellers = [
    {
        first_name: 'John',
        last_name: 'Smith',
        username: 'john@smith.co',
        secret: 'oijfwoiwjfvs',
        email: 'john@smith.co',
        custom_json: {
            product: 'Grade 11 Math',
            price: '$35',
            description: 'This book is NOT in very nice condition. But it is very cheap so still worth it :)',
            photos: [
                'https://chat-engine-assets.s3.amazonaws.com/marketplace/textbooks/math/1.png',
                'https://chat-engine-assets.s3.amazonaws.com/marketplace/textbooks/math/2.png',
            ]
        }
    },
    {
        first_name: 'Jane',
        last_name: 'Doe',
        username: 'jane@doe.co',
        email: 'jane@doe.co',
        secret: 'vwioehvowiej',
        custom_json: {
            product: 'Grade 12 Physics',
            price: '$45',
            description: 'This book is in very nice condition. The price is final so nothing to negotiate',
            photos: [
                'https://chat-engine-assets.s3.amazonaws.com/marketplace/textbooks/physics/1.png',
                'https://chat-engine-assets.s3.amazonaws.com/marketplace/textbooks/physics/2.png',
            ]
        }    
    },
    {
        first_name: 'Tim',
        last_name: 'Leong',
        username: 'tim@leong.co',
        email: 'tim@leong.co',
        secret: 'odvihwoivjw',
        custom_json: {
            product: 'Advanced French',
            price: '$55',
            description: 'This book is in very nice condition. It will help make sure you get the A+ grade you are looking for :)',
            photos: [
                'https://chat-engine-assets.s3.amazonaws.com/marketplace/textbooks/advanced_french/1.png',
                'https://chat-engine-assets.s3.amazonaws.com/marketplace/textbooks/advanced_french/2.png',
            ]
        }
    },
    {
        first_name: 'Joe',
        last_name: 'Holland',
        username: 'joe@holland.co',
        email: 'joe@holland.co',
        secret: 'vsojpeoka',
        custom_json: {
            product: 'Beginner French',
            price: '$25',
            description: 'This book is brand new so the price is final and will be good for the next 4 years before they update it.',
            photos: [
                'https://chat-engine-assets.s3.amazonaws.com/marketplace/textbooks/beginner_french/1.png',
                'https://chat-engine-assets.s3.amazonaws.com/marketplace/textbooks/beginner_french/2.png',
            ]
        }
    },
    {
        first_name: 'Amy',
        last_name: 'Lee',
        username: 'amy@lee.co',
        email: 'amy@lee.co',
        secret: 'vosnlieovjo',
        custom_json: {
            product: 'Grade 10 Chemistry',
            price: '$40',
            description: 'This book is quite old but the price is negotiable',
            photos: [
                'https://chat-engine-assets.s3.amazonaws.com/marketplace/textbooks/chemistry/1.png',
                'https://chat-engine-assets.s3.amazonaws.com/marketplace/textbooks/chemistry/2.png',
            ]
        }
    },
]