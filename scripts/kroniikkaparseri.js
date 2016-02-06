/**
 * Created by Niklas on 6.2.2016.
 */
function parse() {
    $.ajax({
        url: "https://crackling-torch-24.firebaseio.com/.json",
        dataType: "text",
        success: function (data) {
            var obj = data;
            var json = JSON.parse(data);
            var arr = $.map(json, function (el) {
                return el
            });
            var asteriskiArr;
            var digitArr;

            if (arr.length> 0) {
                asteriskiArr = arr[0];
            }
            if (arr.length > 1) {
                digitArr = arr[1];
            }

            var asteriskiDiv = document.createElement("div");
            asteriskiDiv.id = 'asteriskidiv';
            asteriskiDiv.className = 'guilddiv';
            asteriskiDiv.textContent = 'Asteriski';
            var tutorgroupidx = 0;
            var personidx = 0;
            var commentidx = 0;
            for (var k in asteriskiArr) {
                var tutorgroup = asteriskiArr[k];
                var tutorgroupdiv = document.createElement("div");
                tutorgroupdiv.id = "asteriskiTutorGroup" + tutorgroupidx;
                tutorgroupidx++;
                tutorgroupdiv.className = "tutorgroupdiv";
                tutorgroupdiv.textContent = k;

                for (var i in tutorgroup) {
                    var person = tutorgroup[i];
                    var persondiv = document.createElement("div");
                    persondiv.id = "asteriskiTutorGroup" + tutorgroupidx + "person" + personidx;
                    personidx++;
                    persondiv.className = "persondiv";
                    persondiv.textContent = i;

                    for (var j in person) {
                        var comment = person[j].comment;
                        var commentdiv = document.createElement("div");
                        commentdiv.id = "asteriskiTutorGroup" + tutorgroupidx +
                            "person" + personidx + "comment" + commentidx;
                        commentidx++;
                        commentdiv.className = "commentdiv";
                        commentdiv.textContent = comment;

                        persondiv.appendChild(commentdiv);
                    }
                    commentidx = 0;

                    tutorgroupdiv.appendChild(persondiv);
                }

                personidx = 0;

                asteriskiDiv.appendChild(tutorgroupdiv);
            }
            tutorgroupidx = 0;

            var digitDiv = document.createElement("div");
            digitDiv.id = 'digitdiv';
            digitDiv.className = 'guilddiv';
            digitDiv.textContent = 'Digit';
            tutorgroupidx = 0;
            personidx = 0;
            commentidx = 0;
            for (var k in digitArr) {
                var tutorgroup = digitArr[k];
                var tutorgroupdiv = document.createElement("div");
                tutorgroupdiv.id = "digitTutorGroup" + tutorgroupidx;
                tutorgroupidx++;
                tutorgroupdiv.className = "tutorgroupdiv";
                tutorgroupdiv.textContent = k;

                for (var i in tutorgroup) {
                    var person = tutorgroup[i];
                    var persondiv = document.createElement("div");
                    persondiv.id = "digitTutorGroup" + tutorgroupidx + "person" + personidx;
                    personidx++;
                    persondiv.className = "persondiv";
                    persondiv.textContent = i;

                    for (var j in person) {
                        var comment = person[j].comment;
                        var commentdiv = document.createElement("div");
                        commentdiv.id = "digitTutorGroup" + tutorgroupidx +
                            "person" + personidx + "comment" + commentidx;
                        commentidx++;
                        commentdiv.className = "commentdiv";
                        commentdiv.textContent = comment;

                        persondiv.appendChild(commentdiv);
                    }
                    commentidx = 0;

                    tutorgroupdiv.appendChild(persondiv);
                }

                personidx = 0;

                digitDiv.appendChild(tutorgroupdiv);
            }
            tutorgroupidx = 0;


            document.body.appendChild(asteriskiDiv);
            document.body.appendChild(digitDiv);
        },
        error: function (data) {
            var failureDiv = document.createElement("div");
            failureDiv.id = 'failurediv';
            failureDiv.className = 'faildiv';
            failureDiv.textContent = data.status + " " + data.statusText;

            document.body.appendChild(failureDiv);
        }
    });
}