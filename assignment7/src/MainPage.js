import React, {Component}from "react";
import Iran from './images/Iran.jpg'
import Inastagram from './icons/instagram.png'
import Telephone from './icons/telephone-call.png'
import Temp from './videos/COM4134-F21.mp4'


class MainPage extends Component{
    state = {
        name: null,
        age: null
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.id]:event.target.value
        });
        console.log(this.state  );
    }

    onSubmit = (e) =>{
        e.preventDefault();
        console.log("Form submited:",this.state);
        alert("name is " +this.state.name+" and your age is "+this.state.age);
    };




    render(){
        return(
          <div>
            <header className="App-header">
                <div id="div1"> 
                    <img id="left" src="images/wikipedia-logo.jpg" alt="Iran"/> 
                </div>
            

                <div className="div2">

                    <div className= "menu" lang="FA">
                        <ul dir="rtl">
                        <li><a href="#temp">موقعیت جغرافیایی ایران</a></li>
                        <li><a href="#temp1">تاریخچه ایران</a></li>
                        </ul>

                        <div id="header1">
                            <h1>در مورد کشور ایران</h1>
                        </div>


                        <div className="right_sidbar" dir="LTR">
                            <input type = "text" id="search" className ="input" placeholder="search" />
                            <div className="searchbtn">
                                <i id="button"  className="fas fa-search"> </i>
                            </div> 

                        </div>
                    </div>

                </div>
            </header>


            <article dir="RTL">
                <section className = "image">
                    <img id = "imageId" src= {Iran} alt="Iran"/>
                </section> 

                <section className="position_Of_Iran">
                    <a id="temp"> <h1 id="h1">موقعیت جغرافیایی ایران</h1></a>

                    <hr   id="hr"></hr>
                    
                    <p>
                        ایران تاریخی به قدمت 2500 ساله دارد،که این کشور در جنوب غربی آسیا واقع شده هست و این کشور
                        وسعتی حدود1،648،195 کلیو متر مربع است.
                        همسایه های شمال این کشور شامل:
                    </p>

                    <ul dir="rtl">
                        <li>ارمنستان</li>
                        <li>اذربایجان</li>
                        <li>ترکمنستان</li>
                    </ul>

                    <p>
                        ایران دارای منابع فراوانی هست و همینطور ایران کشور چهار فصل است و مناطق گردشگری فراوانی دارد.
                        ایران هم به اب راه دارد و هم به خشکی و هم دارای مناطق سرسبز و حاصل خیز و حتی دارای مناطق کویری است.
                        ایران منابع تجدید ناپذیر مانند سوخت های فسیلی، این کشور دارای سنگ های قیمتی فراوانی است وهمینطور دارای طلا، نقره،فلز
                        والومینیوم و سایر سنگ های است.
                        ایران دارای معادن فراوانی است.
                    </p>
                </section> 


            <section className= "history_Of_Iran">
                <p id = "p">
                    ایران از شرق به پاکستان ، از غرب به ترکیه و عراق واز جنوب خلیج فارس و دریای عمان راه دارد. پایتخت ایران تهران است،که
                    بزرگ ترین  شهر ایران محسوب می شود. ایران دارای 31 استان و 268 شهرستان است.
                    واحد پولی این کشور ریال است و زبان رسمی این کشور فارسی است. ایران یکی از قدیمی ترین مکان های شکل گیری تمدن است و قدیمی ترین
                    مکان های سکونت بشر در ایران در کنار کوه های زاگرس و البرز شکل گرفته است.
                                        
                </p>

                <a id= "temp1"><h1 id="h2">تاریخچه ایران</h1></a>
                <hr id="hr2"></hr>

                <p>
                    مهاجرت اقوام اریایی به فلات ایران از هزاره دوم قبل از میلاد اغاز شروع شد. دراین میان اقوام اریایی ها و پارت ها در خراسان ،مادها
                    در غرب و پارس ها در جنوب ایران مستقر شدند.امپراتوری مادها در هگمتانه یا همدان امروز تشکیل شد و هخامنشیان بعد از پیروزی بر مادها و تسخیر پایتخت اونها
                    ،اولین امپراتوری بزرگ ایران را تشکیل دادند.
                    طوری که حدود تصرفات اونها در زمان داریوش اول از جلگه ی سند در مشرق تا مرزهای یونان در مغرب می رسید.
                    از جمله باارزش ترین بناهای  باستانی ایران و جاذبه های جهانگری جهان تخت جمشید و پاسارگاد به شمار می اید.
                    <br />
                                        
                    بعد از اتمام  حکومت هخامنشیان و به اتش  کشیده شدن  تخت جمشید توسط اسکندر ،سلوکی ها به مدت کوتاهی  به ایران حکومت کردند و در سال 250هجری قمری پارت ها که یکی از قوم های 
                    سوارکار اریایی بودند  از خراسان به سمت غرب  و جنوب غربی پیشروی کردند و امپراتوری خود را در تیسفون بنا نهادند. این امپراتوری تا سال 224 بعد از میلاد دوام پیدا کرد .
                    بعد از ان ساسانیان با پیروزی بر پارت ها  امپراتوری جدیدی به وجود اوردند که تا  اواسط قرن هفتم میلادی دوام پیدا کرد.جمعیت ایران حدود 82میلیون نفر است،
                    که نیمی از این جمعیت ،جمعیت فعال است و جمعیت ایران از نظر جمعیتی جزء جوان ترین کشورها به حساب می اید
                    <br />
                    ایران دارای اقوام بسیاری است که شامل:
                </p>
            </section>

            <section className= "list">
                <ul>
                    <li>فارس ها</li>
                    <li>كردها</li>
                    <li>لرها</li>
                    <li>بلوچ ها</li>
                    <li>بختياري ها</li>
                    <li>ترك هاي آذري</li>
                    <li>تالشی ها</li>
                    <li>تركمن ها</li>
                    <li>قشقايي ها </li>
                    <li>عرب ها</li>
                </ul>
            </section>

            <section className="table">
                <table align="center" >
                
                    <caption>جاذبه های تاریخی و گردشگری ایران</caption>
                    <tbody>
                        <tr>
                            <th>شهرها</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                                
                        </tr>
                        
                        <tr>
                            <td>اصفهان</td>
                            <td>میدان نقش جهان</td>
                            <td>عمارت عالی قاپو</td>
                            <td>کلیسای وانک</td>
                            <td>پل خواجو</td>
                            <td>پل سی و سه پل</td>
                            <td>محله جلفا</td>
                            <td>کاخ چهل ستون</td>
                            <td>منارجنبان</td>
                        </tr>
                        <tr>
                            <td> قشم</td>
                            <td> غار نمکدان</td>
                        </tr>
                            
                        <tr>
                            <td> یزد</td>
                            <td> دخمه های زرتشتیان</td>
                        </tr>
                            
                        <tr>
                            <td> روستای کندوان</td>
                            <td> کندوان</td>
                        </tr>
                            
                        <tr>
                            <td> کیش</td>
                            <td> کاریز کیش</td>
                        </tr>
                            
                        <tr>
                            <td> شیراز</td>
                            <td> دریاچه مهارلو</td>
                            <td> تخت جمشید</td>
                            <td> پاسارگاد</td>
                            <td> مسجد صورتی</td>
                        </tr>
                            
                        <tr>
                            <td> کرمان</td>
                            <td> دشت لوت </td>
                        </tr>
                            
                        <tr>
                            <td> سیستان وبلوچستان</td>
                            <td> دشت لوت </td>
                        </tr>
                            
                        <tr>
                            <td> قشم</td>
                            <td>دره ستارگان</td>
                        </tr>
                        <tr>
                            <td> خوزستان</td>
                            <td>شوشتر</td>
                            <td>چغازنبیل</td>
                        </tr>
                        <tr>
                            <td> اذربایجان شرقی</td>
                            <td>دریاچه گنج</td>
                            <td>بابک</td>
                        </tr>
                        <tr>
                            <td>زنجان</td>
                            <td>غار کتله خور</td>
                        </tr>
                            
                        <tr>
                            <td>کاشان</td>
                            <td>خانه های تاریخی کاشان</td>
                        </tr>
                            
                        <tr>
                            <td>بندرعباس</td>
                            <td>جزیره هرمز</td>
                        </tr>
                            
                        <tr>
                            <td>کرمانشاه </td>
                            <td> بیستون و طاق بستان</td>
                        </tr>
                            
                        <tr>
                            <td>تبریز</td>
                            <td>بازار بزرگ</td>
                            <td>مسجد کبود یا مسجد جهانشاه</td>
                            <td>ارگ تبریز (علیشاه)</td>
                            <td>مسجد جامع تبریز</td>
                            <td>موزه آذربایجان</td>
                            <td>کلیسای استفانوس مقدس</td>
                            
                        </tr>
                    </tbody>     
                </table>
            </section>


            <section className="last_paraghraf">
                <p>
                    پرطرفدار ترین سوغاتی های ایران شامل گیوه،شیرینی،آجیل،ادویه های غذایی،فرش دست باف ایرانی،مینا کاری،
                    خاتم کاری،سفال کاری، گز و سوهان اصفهان،پسته کرمان ،زعفران،خرما، لباس های سنتی ایرانی می باشد.                
                </p>
                                        
            </section>	

            <section className= "icons">
                <img id = "left_Icon_Id" src= {Telephone} alt="telephone_Icon"/>

                <p id="P1">	09138124586</p>

                <img id = "Right_Icon_Id" src= {Inastagram} alt="instagram_Icon"/> 

                <p id="P2">pedrambehhnam1</p>
            </section>

            <section className="submit">
                <div dir="ltr">
                    <form onSubmit={this.onSubmit}>
                        <input type = "text" id="name" className ="input" placeholder="search"  onChange={this.handleChange}/>
                        <input type = "text" id="age" className ="input" placeholder="search" onChange={this.handleChange}/>
                        <button >submit</button>
                        <p>Name:{this.state.name} ,Age:{this.state.age}</p>
                    </form>
                </div>
            </section>
                
            </article>
            
            <div id="footer">
                <video width="320" height="150" id="movie" controls preload="auto" >
                    <source src={Temp} type="video/mp4" title= "samp" />
                </video>
            </div>
          </div>
        )
    }

}


export default MainPage