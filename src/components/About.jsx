import React from 'react';

const About = () => {
  return (
    <section className="section-height bg-custom-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image Section - 1/3 width on desktop */}
          <div className="w-full md:w-1/3">
            <div className="aspect-square relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="/media/images/disco dude.jpeg"
                alt="#sebbedj med diskokula"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          {/* Text Section - 2/3 width on desktop */}
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold mb-6 text-custom-gray-900">
              Om #sebbedj
            </h2>
            <div className="space-y-4 text-custom-gray-600">
              <p>
                Välkommen till en värld där musiken sätter stämningen och varje fest blir unik! Jag är sebbedj – en engagerad och erfaren underhållare som brinner för att skapa oförglömliga stunder på dansgolvet. Jag utgår några mil söder om Växjö och kan enkelt ta mig runt i södra Sverige.

                Med en naturlig känsla för att läsa av publiken och en bred musikalisk repertoar levererar jag precis det som behövs för att din kväll ska bli magisk. Oavsett om det handlar om att sätta takten på ett bröllop, arrangera ett skräddarsytt musikquiz, eller skapa en kväll full av energi och glädje, så är mitt mål att ge dig och dina gäster en upplevelse ni sent kommer glömma.
              </p>
              <p>
                Som DJ är jag inte bara där för att spela musik; jag är där för att skapa minnen. Jag börjar alltid med att lyssna på dina önskemål och planerar musiken utifrån din vision. Vill du ha ett musikquiz för att bygga upp feststämning innan dansen? Eller kanske en blandning av era favoritlåtar och dansgolvets största hits? Jag löser det!

                Så oavsett om du planerar ett bröllop, en privatfest, eller en firmafest – låt mig hjälpa dig göra din tillställning till något alldeles extra.

                Kontakta mig idag så ser vi till att din fest blir en succé!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;