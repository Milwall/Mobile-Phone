				/* This part of code belongs to Apple Phone page */
				
				function changeText1(){

					var changeMe = document.getElementById("phoneContainer");
					changeMe.innerHTML = '<img src="p_image/apple/applefront.png" alt="Apple Phone Front" style="width:238px; height:360px">';

				}

				function changeText2(){

					var changeMe = document.getElementById("phoneContainer");
					changeMe.innerHTML = '<img src="p_image/apple/appleback.png" alt="Apple Phone Back" style="width:238px; height:360px">';

				}
				
				/* This part of code belongs to HTC Phone page */
				
				function changeText3(){

					var changeMe = document.getElementById("phoneContainer");
					changeMe.innerHTML = '<img src="p_image/htc/htc_phone_front.png" alt="HTC Phone Front" style="width:198px; height:360px">';

				}

				function changeText4(){

					var changeMe = document.getElementById("phoneContainer");
					changeMe.innerHTML = '<img src="p_image/htc/htc_phone_back.png" alt="HTC Phone Back" style="width:198px; height:360px">';

				}
				
				/* This part of code belongs to NOKIA Phone page */
				
				function changeText5(){

					var changeMe = document.getElementById("phoneContainer");
					changeMe.innerHTML = '<img src="p_image/nokia/nokia_phone_front.png" alt="NOKIA Phone Front" style="width:198px; height:360px">';

				}

				function changeText6(){

					var changeMe = document.getElementById("phoneContainer");
					changeMe.innerHTML = '<img src="p_image/nokia/nokia_phone_back.png" alt="NOKIA Phone Back" style="width:198px; height:360px">';

				}
				
				/* This part of code belongs to SAMSUNG Phone page */
				
					function changeText7(){

					var changeMe = document.getElementById("phoneContainer");
					changeMe.innerHTML = '<img src="p_image/samsung/samsung_phone_front.png" alt="SAMSUNG Phone Front" style="width:198px; height:360px">';

				}

				function changeText8(){

					var changeMe = document.getElementById("phoneContainer");
					changeMe.innerHTML = '<img src="p_image/samsung/samsung_phone_back.png" alt="SAMSUNG Phone Back" style="width:198px; height:360px">';

				}
				
				/*This for the team page*/
				
				var XMLHttpRequestObject = false;

					if (window.XMLHttpRequest) {
						XMLHttpRequestObject = new XMLHttpRequest();
					} else if (window.ActiveXObject) {
						XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
					}

				function getData(datasource, divID) {
					if (XMLHttpRequestObject) {
							var obj = document.getElementById(divID);
							XMLHttpRequestObject.open("GET", datasource);
							XMLHttpRequestObject.onreadystatechange = function () {

								if (XMLHttpRequestObject.readyState == 4
									&& XMLHttpRequestObject.status == 200) {
										obj.innerHTML = XMLHttpRequestObject.responseText;
								}
							}
							XMLHttpRequestObject.send(null);
						}
					}
					
				/*This part belongs to the tweet logo*/
				
				!function(d,s,id){
					
					var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
					
						if(!d.getElementById(id)){
							js=d.createElement(s);
							js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
							fjs.parentNode.insertBefore(js,fjs);
						}
				}(document, 'script', 'twitter-wjs');