let password = document.forms['reg']['password']
            let inr = document.getElementById("inr")
            let chance = 0

            const iconn = ['🙂', '😎']
            let sicon = document.getElementById("icon")
            sicon.innerHTML = iconn[1]
            let flag = 1


            sicon.addEventListener('click', () => {
                if (flag % 2) {
                    sicon.innerHTML = iconn[0]
                    password.setAttribute('type', 'text')
                } else {
                    sicon.innerHTML = iconn[1]
                    password.setAttribute('type', 'password')
                }
                flag++
            })
            //    *******************************************************
            password.addEventListener('input', (e) => {
                let vaal = e.target.value
                chance = 0

                if (((vaal.search(/[a-z]/i)) >= 0)) {
                    chance++
                }
                if ((vaal.search(/[0-9]/) >= 0)) {
                    chance++
                }
                if (vaal.length > 8) {
                    chance++
                }
                if (vaal.search(/[@~!@#$%^&*()_+|/?''"";:><.,]/) >= 0) {
                    chance++
                }
                let w = 0
                let colorName = ''
                switch (chance) {
                    case 0: w = 0; colorName = ''; break;
                    case 1: w = 25; colorName = 'red'; break;
                    case 2: w = 50; colorName = 'orange'; break;
                    case 3: w = 75; colorName = 'yellow'; break;
                    case 4: w = 100; colorName = 'green'; break;

                }
                inr.style.width = w + '%'
                inr.style.backgroundColor = colorName

            })
            function test(e) {
                if (chance != 4) {
                    alert('Not Correct !')
                    // e.preventDefault()
                    return false
                }
            }
