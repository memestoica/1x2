import React, {useState} from 'react'
import Link from 'next/link'




function Echipe() {

    const initialState = { meci: "", meci2: "", meci3: "", meci4: "", meci5: "", meci6: "", meci7: "", meci8: "", meci9: "", meci10: "",
                           meci11: "", meci12: "", meci13: "", meci14: "", meci15: "", meci16: "", meci17: "", meci18: "", meci19: "", meci20: "" }
    const [ userData, setUserData ] = useState (initialState)
    const { meci, meci2, meci3, meci4, meci5, meci6, meci7, meci8, meci9, meci10,
             meci11, meci12, meci13, meci14, meci15, meci16, meci17, meci18, meci19, meci20 } = userData


    const initialPronoState = {   p1: "", p2: "", p3: "", p4: "", p5: "", p6: "", p7: "", p8: "", p9: "", p10: "",
                                 p11: "", p12: "", p13: "", p14: "", p15: "", p16: "", p17: "", p18: "", p19: "", p20: "",
                                 p21: "", p22: "", p23: "", p24: "", p25: "", p26: "", p27: "", p28: "", p29: "", p30: "",
                                 p31: "", p32: "", p33: "", p34: "", p35: "", p36: "", p37: "", p38: "", p39: "", p40: "", 
                                 p41: "", p42: "", p43: "", p44: "", p45: "", p46: "", p47: "", p48: "", p49: "", p50: "",
                                 p51: "", p52: "", p53: "", p54: "", p55: "", p56: "", p57: "", p58: "", p59: "", p60: "",
                                 p61: "", p62: "", p63: "", p64: "", p65: "", p66: "", p67: "", p68: "", p69: "", p70: "",
                                 p71: "", p72: "", p73: "", p74: "", p75: "", p76: "", p77: "", p78: "", p79: "", p80: "",
                             }
    const [ pronoData, setPronoData ] = useState (initialPronoState)
    const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
            p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,
            p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, p51, p52, p53, p54, p55, p56, p57, p58, p59, p60,
            p61, p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75, p76, p77, p78, p79, p80 } = pronoData

    const echipe = []
        echipe.push(meci, meci2, meci3, meci4, meci5, meci6, meci7, meci8, meci9, meci10,
                        meci11, meci12, meci13, meci14, meci15, meci16, meci17, meci18, meci19, meci20 )
        
    const prono1 = []
    
        prono1.push(p1, p2, p3, p4, )

    const prono2 = []  
        prono2.push(p5, p6, p7, p8 )

    const prono3 = []  
        prono3.push(p9, p10, p11, p12)
    
    const prono4 = []  
        prono4.push(p13, p14, p15, p16)

    const prono5 = []  
        prono5.push(p17, p18, p19, p20)

    const prono6 = []  
        prono6.push(p21, p22, p23, p24)

    const prono7 = []  
        prono7.push(p25, p26, p27, p28)

    const prono8 = []  
        prono8.push(p29, p30, p31, p32)

    const prono9 = []  
        prono9.push(p33, p34, p35, p36)

    const prono10 = []  
        prono10.push(p37, p38, p39, p40)

    const prono11 = []  
        prono11.push(p41, p42, p43, p44)

    const prono12 = []  
        prono12.push(p45, p46, p47, p48)

    const prono13 = []  
        prono13.push(p49, p50, p51, p52)

    const prono14 = []  
        prono14.push(p53, p54, p55, p56)

    const prono15 = []  
        prono15.push(p57, p58, p59, p60)

    const prono16 = []  
        prono16.push(p61, p62, p63, p64)

    const prono17 = []  
        prono17.push(p65, p66, p67, p68)

    const prono18 = []  
        prono18.push(p69, p70, p71, p72)

    const prono19 = []  
        prono19.push(p73, p74, p75, p76)

    const prono20 = []  
        prono20.push(p77, p78, p79, p80)



    const handleChange = e =>  {
            const { name, value } = e.target
            setUserData ( { ...userData, [name]:value } )
        }

    const handleChangeP = e =>  {
            const { name, value } = e.target
        setPronoData ( { ...pronoData, [name]:value } )
        }
    
    const handleSubmit = e => {
            e.preventDefault();
            const { name, value } = e.target
            setPronoData ( { ...pronoData, [name]:value } )   
        }

    function getRandomInt(max) { return Math.floor(Math.random() * Math.floor(max)); }

    

            return (
                <div className="container_app">
                    <form className="signin-form" onSubmit={handleSubmit}>
                         <button type="submit" className="signin-btn">Da-ti demisia!</button>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 1" name="meci" value={meci} onInput={handleChange} />
                            <input type="text" className="signin-inP" placeholder="P1" name="p1" value={p1} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p2" value={p2} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p3" value={p3} onInput={handleChangeP}/>                    
                            <input type="text" className="signin-inP" placeholder="P4" name="p4" value={p4} onInput={handleChangeP}/>         
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 2" name="meci2" value = {meci2} onInput={handleChange} />
                            <input type="text" className="signin-inP" placeholder="P1" name="p5" value={p5} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p6" value={p6} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p7" value={p7} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p8" value={p8} onInput={handleChangeP}/>              
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 3" name="meci3" value = {meci3} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p9" value={p9} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p10" value={p10} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p11" value={p11} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p12" value={p12} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 4" name="meci4" value = {meci4} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p13" value={p13} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p14" value={p14} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p15" value={p15} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p16" value={p16} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 5" name="meci5" value = {meci5} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p17" value={p17} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p18" value={p18} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p19" value={p19} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p20" value={p20} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 6" name="meci6" value = {meci6} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p21" value={p21} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p22" value={p22} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p23" value={p23} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p24" value={p24} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 7" name="meci7" value = {meci7} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p25" value={p25} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p26" value={p26} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p27" value={p27} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p28" value={p28} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 8" name="meci8" value = {meci8} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p29" value={p29} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p30" value={p30} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p31" value={p31} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p32" value={p32} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 9" name="meci9" value = {meci9} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p33" value={p33} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p34" value={p34} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p35" value={p35} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p36" value={p36} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 10" name="meci10" value = {meci10} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p37" value={p37} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p38" value={p38} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p39" value={p39} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p40" value={p40} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 11" name="meci11" value = {meci11} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p41" value={p41} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p42" value={p42} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p43" value={p43} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p44" value={p44} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 12" name="meci12" value = {meci12} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p45" value={p45} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p46" value={p46} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p47" value={p47} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p48" value={p48} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 13" name="meci13" value = {meci13} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p49" value={p49} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p50" value={p50} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p51" value={p51} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p52" value={p52} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 14" name="meci14" value = {meci14} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p53" value={p53} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p54" value={p54} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p55" value={p55} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p56" value={p56} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 15" name="meci15" value = {meci15} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p57" value={p57} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p58" value={p58} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p59" value={p59} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p60" value={p60} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 16" name="meci16" value = {meci16} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p61" value={p61} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p62" value={p62} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p63" value={p63} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p64" value={p64} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 17" name="meci17" value = {meci17} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p65" value={p65} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p66" value={p66} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p67" value={p67} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p68" value={p68} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 18" name="meci18" value = {meci18} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p69" value={p69} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p70" value={p70} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p71" value={p71} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p72" value={p72} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 19" name="meci19" value = {meci19} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p73" value={p73} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p74" value={p74} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p75" value={p75} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p76" value={p76} onInput={handleChangeP}/>
                        </div>
                        <div className='linie'>
                            <input type="text" className="signin-input" placeholder="Meciul 20" name="meci20" value = {meci20} onInput={handleChange}/>
                            <input type="text" className="signin-inP" placeholder="P1" name="p77" value={p77} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P2" name="p78" value={p78} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P3" name="p79" value={p79} onInput={handleChangeP}/>
                            <input type="text" className="signin-inP" placeholder="P4" name="p80" value={p80} onInput={handleChangeP}/>
                        </div>
                        
                    </form>
                    <div className="container_bilet">
                   
                    <div className='meciuri_prono'>       
                        <ol className="lista_meciuri">
                            {<li > {echipe[0]}</li>} 
                            {<li > {echipe[1]}</li>} 
                            {<li > {echipe[2]}</li>} 
                            {<li > {echipe[3]}</li>} 
                            {<li > {echipe[4]}</li>} 
                            {<li > {echipe[5]}</li>} 
                            {<li > {echipe[6]}</li>} 
                            {<li > {echipe[7]}</li>} 
                            {<li > {echipe[8]}</li>} 
                            {<li > {echipe[9]}</li>} 
                            {<li > {echipe[10]}</li>}
                            {<li > {echipe[11]}</li>} 
                            {<li > {echipe[12]}</li>} 
                            {<li > {echipe[13]}</li>} 
                            {<li > {echipe[14]}</li>} 
                            {<li > {echipe[15]}</li>}
                            {<li > {echipe[16]}</li>} 
                            {<li > {echipe[17]}</li>} 
                            {<li > {echipe[18]}</li>} 
                            {<li > {echipe[19]}</li>}     
                        </ol>
                        <ul className="prono">
                            {<li > { p4 ? prono1[getRandomInt(4)]: prono1[getRandomInt(3)]  } </li>} 
                            {<li > { p8 ? prono2[getRandomInt(4)]: prono2[getRandomInt(3)]  } </li>}
                            {<li > { p12 ? prono3[getRandomInt(4)]: prono3[getRandomInt(3)]  } </li>}
                            {<li > { p16 ? prono4[getRandomInt(4)]: prono4[getRandomInt(3)]  } </li>}
                            {<li > { p20 ? prono5[getRandomInt(4)]: prono5[getRandomInt(3)]  } </li>}
                            {<li > { p24 ? prono6[getRandomInt(4)]: prono6[getRandomInt(3)]  } </li>}
                            {<li > { p28 ? prono7[getRandomInt(4)]: prono7[getRandomInt(3)]  } </li>}
                            {<li > { p32 ? prono8[getRandomInt(4)]: prono8[getRandomInt(3)]  } </li>} 
                            {<li > { p36 ? prono9[getRandomInt(4)]: prono9[getRandomInt(3)]  } </li>} 
                            {<li > { p40 ? prono10[getRandomInt(4)]: prono10[getRandomInt(3)]  } </li>} 
                            {<li > { p44 ? prono11[getRandomInt(4)]: prono11[getRandomInt(3)]  } </li>} 
                            {<li > { p48 ? prono12[getRandomInt(4)]: prono12[getRandomInt(3)]  } </li>}
                            {<li > { p52 ? prono13[getRandomInt(4)]: prono13[getRandomInt(3)]  } </li>}
                            {<li > { p56 ? prono14[getRandomInt(4)]: prono14[getRandomInt(3)]  } </li>}
                            {<li > { p60 ? prono15[getRandomInt(4)]: prono15[getRandomInt(3)]  } </li>}
                            {<li > { p64 ? prono16[getRandomInt(4)]: prono16[getRandomInt(3)]  } </li>}
                            {<li > { p68 ? prono17[getRandomInt(4)]: prono17[getRandomInt(3)]  } </li>}
                            {<li > { p72 ? prono18[getRandomInt(4)]: prono18[getRandomInt(3)]  } </li>}
                            {<li > { p76 ? prono19[getRandomInt(4)]: prono19[getRandomInt(3)]  } </li>}
                            {<li > { p80 ? prono20[getRandomInt(4)]: prono20[getRandomInt(3)]  } </li>}
                        </ul>        
                    </div>
                </div> 
            </div>
                
            )
    
}
export default Echipe
