//your JS code here. If required.
 line = document.getElementById('line');
        let angle = 0;

        function rotateLine() {
            angle += 2;
            line.style.transform = `rotate(${angle}deg)`;
            requestAnimationFrame(rotateLine);
        }

        rotateLine();
