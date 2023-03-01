var arrayList = [];
    for(var i in student) {
                var getid = student[i].name;
			 	var math = student[i].maths;
			 	var sci = student[i].science;
			 	var eng = student[i].english;
        for(var j in computer){
            var compareid = computer[j].name;
            var marks = computer[j].Computers;
            if(getid == compareid){
                var obj = {};
                
                obj.name = getid;
                obj.maths=math;
                obj.science=sci;
                obj.english=eng;
                obj.computers=marks;
                arrayList.push(obj);
            }
         }

    }
    console.log(arrayList);