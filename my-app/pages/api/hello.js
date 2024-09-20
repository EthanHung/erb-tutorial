export default function handler(req, res) {
    let data = [
        {
            "icon": "https://placehold.co/600x400/000000/FFF?text=Carmen",
            "name": "Carmen Beline",
            "loginId": "Carmen.Bel",
            "products": [
                {
                    "productName": "Search",
                    "role": "Designer",
                    "status": "In Working",
                    "finalDate": "Thu Sep 19 2024"
                }
            ]
        },
        {
            "icon": "https://placehold.co/600x400/000000/FFF?text=Sam",
            "name": "Sam E",
            "loginId": "sam.e",
            "products": [
                {
                    "productName": "Search",
                    "role": "Designer",
                    "status": "In Working",
                    "finalDate": "Thu Sep 19 2024"
                },
                {
                    "productName": "Test",
                    "role": "Designer",
                    "status": "None",
                    "finalDate": "Thu Sep 19 2024"
                },
                {
                    "productName": "Search",
                    "role": "Designer",
                    "status": "In Working",
                    "finalDate": "Thu Sep 19 2024"
                }
            ]
        }
    ];
    res.status(200).json(data)
  }