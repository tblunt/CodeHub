(function () {
    'use strict';

    //hämtar Application-modulen som redan är skapad i Application.js
    var application = angular.module('Application');

    //Binder direktivet till vår modul
    application.directive('courseList', [function () {

        function link($scope, $element, $attrs) {
            $scope.courseData = getData();
            

        }

        function getData() {
            return [
                 {
                     title: "Bildbehandling och bildanalys(Matlab)",
                     description: "Kursens syfte är att ge en teoretisk och praktisk grund för datoriserad bearbetning och analys av digitala bilder."
                 },
                 {
                     title: "Modelleringsprojekt",
                   
                     description: "En dynamisk modell ska skapas för ett utvalt projektobjekt. Genom simulering med hjälp av modellen ska objektet studeras dynamiskt. Rapportskrivning och muntlig presentation på svenska."
                 },
                  {
                      title: "Kommunikation och användargräsnitt(Java)",
                     
                      description: "Kursen syftar till att ge studenterna grundläggande kännedom om kognitiva processer och interatkiva datorsystem samt kunskaper om principer, metoder och verktyg för att utveckla datorsystem anpassade till användaren. "
                  },
                   {
                       title: "Vetenskaplig visualisering(C++, Python)",
                      
                       description: "Kursen syftar till att ge fördjupade insikter i metoder för visualisering av vetenskapliga data från experiment och beräkningar samt genom programmeringsövningar belysa dessa metoders möjligheter och begränsningar. "
                   },
                   {
                       title: "Modelleringsprojekt(Matlab, Simulink)",
                      
                       description: ""
                   },
                     {
                         title: "VR-teknik",
                        
                         description: "Målet med kursenär att studenterna skall få insikt i vad VRär, hur det används och hur det kan implementeras och utnyttjas. De skalläven lära sig analysera behov och utmaningar, och lära sig att tillämpa teorier och principer för att realisera effektiva VR-gränssnitt och -interaktion. "
                     },
                   {
                       title: "Databaser(mySQL)",
                     
                       description: "Grunderna inom databaser. Databasdesign och SQL-programering."
                   },
                   {
                       title: "Grafisk teknik(Matlab)",
                      
                       description: "Informationsteknikens användning vid bildåtergivning och framställning av trycksaker."
                   },
                   {
                       title: "Elektronisk publicering(Html,css,php)",
                     
                       description: "Fokus på tekniker för innehållsutformning inom elektronisk publicering. Grundläggande märkspråk för innehållsutformning. Introduktion till klient-servermodellen och skriptspråk. Introduktion till layout och form inom elektronisk publicering, exempelvis formatmallar."
                   },
                   {
                       title: "Kompression av ljud och bild(Matlab)",
                     
                       description: "Kursen ska ge kunskap om metoder för komprimering av data, samt hur dessa metoder tillämpas på ljud- och bildsignaler."
                   },
                   {
                       title: "Medierätt",
                     
                       description: "Kursen syftar till att den studerande skall tillägna sig goda kunskaper om immaterialrätt, varmed olika former av resultatet av intellektuellt skapande avses. Kursen syftar därmed till att den studerande skall erhålla goda kunskaper om vad som krävs för att lagligt skyddad ensamrätt skall uppnås/föreligga samt att studenten skapar sig förståelse för immaterialrättsliga reglers roll i en marknadsekonomi. Den studerande skalläven förvärva god förmåga att identifiera, analysera och lösa praktiskt inriktade problemställningar inom de angivna rättsområdena."
                   },
                   {
                       title: "Projektledning",
                     
                       description: "Ledarskap i projekt. Projekt och organisation. Projektgruppens utveckling. Gruppnormer & grupproller i projekt. Konflikthantering. Motivation & drivkrafter. "
                   },
                   {
                       title: "Datorgrafik",
                     
                       description: "2D-grafik: pixelgrafik kontra objektgrafik, primitiver, parametriska och implicita kurvor, transformationer, rendering. Grafikprogrammering i 2D. 3D-grafik: objekt, polygoner, kort om parametriska och implicita ytor, transformationer, projektion, perspektiv, gömda ytor, lokala ljusmodeller. Enklare grafikprogrammering i 3D."
                   },
                   {
                       title: "Videoproduktion",
                      
                       description: "Efter fullgjord kurs ska kursdeltagaren ha fått en inledande kunskap inom medieområdet. Inom ett område, som studenten själv väljer, erhålls en mer fördjupad kunskap. Efter kursen skall studenten vara bekant med en projektmodell som hjälpmedel och kunna grunderna i enklare rapportskrivning. Vidare skall studenten ha stiftat bekantskap med frågeställningar som rör informationssökning, etik, samt fusk och plagiat."
                   },
                   {
                       title: "Designmönster",
                   
                       description: "Efter kursen ska studenten kunna använda designmönster, det vill säga, utföra lösningar för standardproblem i objektorienterad programvaruutvekling. Studenten skaäven kunna använda programvaruevolutionsmetodik så som refactoring samt beskriva de implementationsmönster (idiom) som kan finnas i ett programspråk."
                   },
                   {
                       title: "Ljudteknik I(Matlab)",
                    
                       description: "Grundläggande beskrivning av ljudvågor och fysikaliska fenomen relaterade till dessa. Ljudutberedning och rumsakustik. Psykoakustik: människans uppfattning av ljud. Egenskaper hos några olika ljudalstrare. Ljudmätteknik och elektroniska kretsar relaterade till ljud. Introduktion till digitalt ljud, olika digitala ljudformat och signalbehandling. Grunderna i ljudupptagning och ljudbearbetning."
                   },
                   {
                       title: "Datamodeller för kognitiva processer(Lisp)",
                     
                       description: "Grunder, tekniker och begrepp inom AI-programering."
                   },
                   {
                       title: "Programkotruktion(Ada)",
                      
                       description: "Kursen skall ge grundläggande kunskaper om hur man konstruerar program i ett högnivåspråk, ada."
                   },
                   {
                       title: "Objektorienterad programmering(Java)",
                       
                       description: "Kursen ska ge kunskaper om objektorienterad programutveckling och programmering i ett objektorienterat programspråk, Java."
                   },
                    {
                        title: "C# och .net",
                        
                        description: "Kursens målär att ge en bra försåelse och grund inom C#/.net."
                    },
                     {
                         title: "Programmering i C++",
                        
                         description: "Kursens syfteär att ge kunskaper i att använda programspråket C++ för att utveckla program. "
                     },
                      {
                          title: "Matematisk grundkurs",
                       
                          description: "Kursen syftar till att bidra till en positiv start på universitetsstudierna, både då det gäller en social tillhörighet samt att få en repetition av matematik från tidigare studier. Dessutom skall några matematiska begrepp, som för mångaär nya, introduceras."
                      },
                        {
                            title: "Linjär algebra",
                          
                            description: "Att ge sammanhållen begreppsram för geometrisk och algebraisk teknik med tillämpningar inom analys, datorgrafik, elektroteknik, reglerteknik, linjär optimering m fl.ämnen. Vidare ingår att utveckla förmågan att använda det matematiska språket, skriftligt och muntligt."
                        },
                         {
                             title: "Analys I",
                            
                             description: "Att du som student skall tillägna dig den förtrogenhet med matematiska begrepp, resonemang och samband som ryms inom envariabelsanalys samt den färdighet i kalkyl och problemlösning som behövs för de fortsatta studierna."
                         },
                         {
                             title: "Analys II",
                            
                             description: "Att du som student skall tillägna dig den förtrogenhet med matematiska begrepp, resonemang och samband som ryms inom envariabelsanalys samt den färdighet i kalkyl och problemlösning som behövs för de fortsatta studierna. "
                         },
                         {
                             title: "Analys III",
                            
                             description: "Kursen bygger på kursen i Analys I-II. Följaktligenär målen likartade: att ge de studerande förståelse för matematiska begrepp och förtrogenhet med matematiska metoder för funktioner av flera variabler som uppstår i alla grenar av fysik och teknik."
                         },
                         {
                             title: "Vektoranalys",
                          
                             description: "Kursen bygger på kursen i flervariabelanalys. Följaktligenär målen likartade: att ge de studerande förståelse för matematiska begrepp och förtrogenhet med matematiska metoder för vektorfält som uppstår i alla grenar av fysik och teknik."
                         },
                         {
                             title: "Matematisk statistik",
                           
                             description: "Kursen avser att lära den studerande förstå och utnyttja grundläggande sannolikhetslära och statistik, dvs teorin för försök som påverkas av slumpmässiga faktorer. Kursen inriktas speciellt på sådana grundläggande kunskaper som krävs för tillämpningar inom teknik, ekonomi och naturvetenskap."
                         },
                        {
                            title: "Tillämpad Transformteori",
                            
                            description: "Kursen skall ge de matematiska grunderna för de transformmetoder som används i kretsteori, reglerteori, signaler och system, bildbehandling och produktionsekonomi. "
                        },
                        {
                            title: "Signaler och system",
                          
                            description: "Grundläggande signaler och deras egenskaper, LTI-system, Fouriertransformen och frekvensanalys, Samplingsvillkor och tidsdiskreta signaler, Laplacetransformen och systemanalys, Z-transformen för samplade signaler och system, Digitala filter, Adaptiva filter."
                        },
                        {
                            title: "Modellbygge och simulering",
                          
                            description: "Kursen skall ge kunskaper om metoder och principer att bygga matematiska modeller för dynamiska system (dvs system som beskrivs med hjälp av differential och/eller differensekvationer). Kursen skall också ge kunskaper om hur modellernas egenskaper studeras genom simulering."
                        },
                        {
                            title: "Reglerteknik",
                            
                            description: "Kursen skall ge förståelse för dynamiska system och kunskaper om grundläggande metoder för att analysera och dimensionera återkopplade reglersystem."
                        },
                    {
                        title: "Industriell ekonomi",
                       
                        description: "Kursen avser att ge de studerande en orientering i de sammanhang företag verkar."
                    },
                    {
                        title: "Retorik",
                      
                        description: "Föreläsningar i retorikens teori och retorisk analys, med aktuella exempel. Seminarier kring retorikens genrer och dess klassiska och moderna uttrycksformer. Den studerande genomför egna presentationer, analyser samt skriver texter där retorikens olika grepp och stilmedel används."
                    },
                    {
                        title: "Tillämpad matematik i teknik och naturvetenskap",
                       
                        description: "Kursen avser att utgöra en brygga mellan de grundläggande matematikkurserna och kurser inom teknik och naturvetenskap. Genom att använda beräkningshjälpmedel som Matlab kan mer realistiska problem studeras och studenterna skall vänja sig vid att naturligt använda det språk som matematikstudierna ger dem för att tala om tillämpade problemställningar."
                    },
                    {
                        title: "Mekanik- och vågfysik",
                       
                        description: "Kursen skall ge grundläggande kunskaper inom några centrala delar av den klassiska fysiken samt kännedom om viktiga tillämpningar. Laborationsdelen skall ge erfarenhet av att planera,utföra och redovisa experiment. "
                    }
                 
            ]
        }

        return {
            templateUrl: "Application/Directives/CourseList/CourseList.html",
            restrict: 'E',
            link: link
        };
    }])
})();