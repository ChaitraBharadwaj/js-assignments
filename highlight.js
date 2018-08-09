function highlightLandmarks(a,b){
	var obj = {
		sentence :a,
		words:b,
		output:function(){
			if(this.words.length!=0)
			for(var i=0;i<this.words.length;i++){
			if(this.sentence.includes(this.words[i]))
				this.sentence=this.sentence.replace(this.words[i],`<b>${this.words[i]}</b>`)
			}
			return this.sentence
		}
	}
    return obj.output();
}
console.log(highlightLandmarks('if one word could encapsulate the essence of this historic city it would be drama start your day at the show stopping pantheon followed by a gelato at the acclaimed trevi fountain then hop between buzzing bars in vivacious trastevere', ['pantheon','trevi','trastevere']))