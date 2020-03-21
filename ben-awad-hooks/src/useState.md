Pour stopper qu'un state ne change à chaque rendu on peut renvoyer une fonction dans le state qui nous retourne qqch

Cela nous sers quand on a une compilation trop couteuse.

    exemple: 

        function expensiveInitialState(){
            return 10;
        }


        const App = () => {
            useState(() => expensiveInitialState());

            return <div>Hey</div>
        };
