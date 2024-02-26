<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Serenity VR</title>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Open Sans', sans-serif;
        }
    </style>
</head>
<body>
<div id="app"></div>

<script type="text/babel">
    function App() {
        return (
            <div className="container mx-auto px-4">
                <header className="text-center my-12">
                    <div className="text-4xl font-bold mb-4">Welcome to Serenity</div>
                    <p className="text-xl">Serenity is the world's first virtual reality calm-down environment for students. The free app is made for use with common and affordable VR viewers, with an education-first development process. The app features a selection of beautiful, immersive digital environments which include calming sounds and gentle music.</p>
                </header>

                <section className="my-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src="https://placehold.co/500x300?text=Person+Using+VR+Headset" alt="A person wearing a VR headset and interacting with a virtual environment, hands raised and touching virtual elements" className="rounded"/>
                        <img src="https://placehold.co/500x300?text=Digital+Environment+Preview" alt="Preview images of calming digital environments on smartphone screens, depicting serene landscapes with mountains and sunset" className="rounded"/>
                    </div>
                    <div className="text-center my-12">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Learn More</button>
                    </div>
                </section>

                <section className="my-12">
                    <div className="text-center">
                        <img src="https://placehold.co/500x300?text=VR+Headset+and+Smartphone" alt="A VR headset next to a smartphone with the Serenity app on the screen, indicating the phone is used as the VR platform" className="rounded mb-4"/>
                        <p className="text-xl">For affordability and ease-of-use, the Serenity system uses your Smartphone and any available VR headset viewer, including Google Cardboard. VR Viewers allow your phone to act as the VR platform, as opposed to a more expensive VR device (i.e. Oculus). Once the Serenity app is launched, the phone is placed into the headset, which has special plastic lenses to make the phone screen magically appear like a 360-degree, full-surround environment.</p>
                    </div>
                </section>

                <footer className="my-12 text-center">
                    <div className="text-2xl font-bold mb-4">Affordable. Accessible.</div>
                    <p className="text-xl">One of our guiding principles was to make Serenity accessible to all parents, teachers and students regardless of socio-economic background. Thus, the Serenity Smartphone app is free. Moreover, Serenity was designed to work with all available VR Viewers.</p>
                    <p className="text-xl my-4">As opposed to expensive VR gaming headsets (i.e. Oculus $399), Serenity works great on inexpensive viewers, including Google Cardboard (currently under $10). Users can find many options online.</p>
                    <p className="text-xl">In the near future, Infia Studios will offer a selection of our favorite VR viewers for sale via our forthcoming online store.</p>
                    <div className="text-center my-12">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Contact the Infia Studios Team</button>
                    </div>
                </footer>
            </div>
        );
    }

    ReactDOM.render(<App />, document.getElementById('app'));
</script>
</body>
</html>
