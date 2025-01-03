import { useTranslation, Trans } from "react-i18next"

const Home = () => {
    const {t} = useTranslation();
    
    //const {line1, line2} = t('description',{channel: "Hazrat Sufi Abdul Rehman Shah Baba"});
    const {line1, line2} = t('description');
    
  return (
    <>  
        {/* <div className="container mt-5">
            <div className="row my-3">
                <div className="col-12 text-center">
                    <h1 className="display-5">ಸೂಫಿಸಂ</h1>
                    <p>(ಈ ಲೇಖನವು ಅತೀಂದ್ರಿಯ ಅಭ್ಯಾಸದ ದೇಹದ ಬಗ್ಗೆ. ಇತರ ಬಳಕೆಗಳಿಗಾಗಿ, ಸೂಫಿಸಂ (ದ್ವಂದ್ವ ನಿವಾರಣೆ) ನೋಡಿ. "ಸೂಫಿ" ಇಲ್ಲಿಗೆ ಮರುನಿರ್ದೇಶಿಸುತ್ತದೆ. ಇಸ್ಲಾಂನಲ್ಲಿ ಪವಿತ್ರೀಕರಣಕ್ಕಾಗಿ, ತಜ್ಕಿಯಾವನ್ನು ನೋಡಿ.)</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="lead">
                        <p>ಸೂಫಿಸಂ (ಅರೇಬಿಕ್: الصوفية, ರೋಮನೈಸ್ಡ್: ಅಲ್-ಷೂಫಿಯಾ ಅಥವಾ ಅರೇಬಿಕ್: التصوف, ರೋಮನೈಸ್ಡ್: ಅಲ್-ತಸವ್ವುಫ್) ಇಸ್ಲಾಮಿನಲ್ಲಿ ಕಂಡುಬರುವ ಧಾರ್ಮಿಕ ಆಚರಣೆಯ ಒಂದು ಅತೀಂದ್ರಿಯ ದೇಹವಾಗಿದ್ದು, ಇದು ಇಸ್ಲಾಮಿಕ್ ಶುದ್ಧೀಕರಣ, ಆಧ್ಯಾತ್ಮಿಕತೆ, ಧಾರ್ಮಿಕತೆ ಮತ್ತು ತಪಸ್ವಿಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕೃತವಾಗಿದೆ.</p>
                        <p>
                        ಸೂಫಿಸಂನ ಅಭ್ಯಾಸಿಗಳನ್ನು "ಸೂಫಿಗಳು" (صُوفِيّ, ṣūfīy ನಿಂದ) ಎಂದು ಉಲ್ಲೇಖಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ಐತಿಹಾಸಿಕವಾಗಿ ವಿಶಿಷ್ಟವಾಗಿ ತಾರಿಕಾ (pl. ṭuruq) ಎಂದು ಕರೆಯಲ್ಪಡುವ "ಆರ್ಡರ್‌ಗಳಿಗೆ" ಸೇರಿದವರು - ಒಬ್ಬ ಮಹಾನ್ ವಾಲಿ (ಸಂತ) ಸುತ್ತಲೂ ಸಭೆಗಳು ರಚಿಸಲ್ಪಟ್ಟವು. ಒಳಗೊಳ್ಳುವ ಗುರಿಯೊಂದಿಗೆ ಮುಹಮ್ಮದ್‌ಗೆ ಮತ್ತೆ ಸಂಪರ್ಕ ಕಲ್ಪಿಸುವ ಸತತ ಶಿಕ್ಷಕರ ಸರಪಳಿ ತಜ್ಕಿಯಾ (ಸ್ವಯಂ ಶುದ್ಧೀಕರಣ) ಮತ್ತು ಇಹ್ಸಾನ್ ಆಧ್ಯಾತ್ಮಿಕ ನಿಲ್ದಾಣವನ್ನು ತಲುಪುವ ಭರವಸೆ. ಫಿತ್ರಾ ಎಂದು ಕರೆಯಲ್ಪಡುವ ಅವರ ಮೂಲ ಶುದ್ಧತೆ ಮತ್ತು ನೈಸರ್ಗಿಕ ಸ್ವಭಾವಕ್ಕೆ ಮರಳಲು ಪ್ರಯತ್ನಿಸುವ ಮೂಲಕ ದೇವರ ಆನಂದವನ್ನು ಹುಡುಕುವುದು ಸೂಫಿಗಳ ಅಂತಿಮ ಗುರಿಯಾಗಿದೆ.
                        </p>
                        <p>
                        ಇಸ್ಲಾಮಿಕ್ ಇತಿಹಾಸದ ಆರಂಭದಲ್ಲಿ ಸೂಫಿಸಂ ಹೊರಹೊಮ್ಮಿತು, ಭಾಗಶಃ ಆರಂಭಿಕ ಉಮಯ್ಯದ್ ಕ್ಯಾಲಿಫೇಟ್ (661-750) ವಿಸ್ತರಣೆಯ ವಿರುದ್ಧ ಪ್ರತಿಕ್ರಿಯೆಯಾಗಿ ಮತ್ತು ಮುಖ್ಯವಾಗಿ ಹಸನ್ ಅಲ್-ಬಸ್ರಿ ಅವರ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ. ಸೂಫಿಗಳು ಒಣ ಕಾನೂನುಬದ್ಧತೆಯನ್ನು ವಿರೋಧಿಸುತ್ತಿದ್ದರೂ, ಅವರು ಇಸ್ಲಾಮಿಕ್ ಕಾನೂನನ್ನು ಕಟ್ಟುನಿಟ್ಟಾಗಿ ಪಾಲಿಸಿದರು ಮತ್ತು ಇಸ್ಲಾಮಿಕ್ ನ್ಯಾಯಶಾಸ್ತ್ರ ಮತ್ತು ದೇವತಾಶಾಸ್ತ್ರದ ವಿವಿಧ ಶಾಲೆಗಳಿಗೆ ಸೇರಿದವರು.ಬಹುಪಾಲು ಸೂಫಿಗಳು, ಆಧುನಿಕ-ಪೂರ್ವ ಮತ್ತು ಆಧುನಿಕ ಎರಡೂ, ಸುನ್ನಿ ಇಸ್ಲಾಂನ ಅನುಯಾಯಿಗಳಾಗಿ ಉಳಿದಿದ್ದರೂ, ಸೂಫಿ ಚಿಂತನೆಯ ಕೆಲವು ಎಳೆಗಳು ಮಧ್ಯಕಾಲೀನ ಅವಧಿಯ ಕೊನೆಯಲ್ಲಿ ಶಿಯಾ ಇಸ್ಲಾಂನ ಮಹತ್ವಾಕಾಂಕ್ಷೆಗಳಿಗೆ ವರ್ಗಾಯಿಸಲ್ಪಟ್ಟವು. ಇರ್ಫಾನ್ ಪರಿಕಲ್ಪನೆಯಡಿಯಲ್ಲಿ ಇರಾನ್‌ನ ಸಫಾವಿಡ್ ಪರಿವರ್ತನೆಯ ನಂತರ ಇದು ವಿಶೇಷವಾಗಿ ಸಂಭವಿಸಿತು.ಸೂಫಿ ಆರಾಧನೆಯ ಪ್ರಮುಖ ಕೇಂದ್ರಗಳು ಧಿಕ್ರ್, ದೇವರ ಸ್ಮರಣೆಯ ಅಭ್ಯಾಸವನ್ನು ಒಳಗೊಂಡಿವೆ. ಸೂಫಿಗಳು ತಮ್ಮ ಮಿಷನರಿ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ಚಟುವಟಿಕೆಗಳ ಮೂಲಕ ಇಸ್ಲಾಂ ಧರ್ಮವನ್ನು ಹರಡುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದ್ದಾರೆ.
                        </p>
                        <p>
                        ಆಧುನಿಕ ಯುಗದಲ್ಲಿ ಸೂಫಿ ಆದೇಶಗಳ ತುಲನಾತ್ಮಕ ಕುಸಿತ ಮತ್ತು ಮೂಲಭೂತವಾದಿ ಇಸ್ಲಾಮಿಕ್ ಚಳುವಳಿಗಳಿಂದ (ಸಲಾಫಿಸಂ ಮತ್ತು ವಹಾಬಿಸಂನಂತಹ) ದಾಳಿಗಳ ಹೊರತಾಗಿಯೂ, ಇಸ್ಲಾಮಿಕ್ ಜಗತ್ತಿನಲ್ಲಿ ಸೂಫಿಸಂ ಪ್ರಮುಖ ಪಾತ್ರವನ್ನು ವಹಿಸುವುದನ್ನು ಮುಂದುವರೆಸಿದೆ. ಇದು ಪಶ್ಚಿಮದಲ್ಲಿ ವಿವಿಧ ರೀತಿಯ ಆಧ್ಯಾತ್ಮಿಕತೆಯ ಮೇಲೆ ಪ್ರಭಾವ ಬೀರಿದೆ ಮತ್ತು ಗಮನಾರ್ಹವಾದ ಶೈಕ್ಷಣಿಕ ಆಸಕ್ತಿಯನ್ನು ಉಂಟುಮಾಡಿದೆ.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-light py-3">
            <div className="container my-5">
                <div className="row my-5">
                    <div className="col-12">
                        <h1 className="text-center display-5">ಮುಯಿನ್ ಅಲ್-ದಿನ್ ಚಿಶ್ತಿ</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-2">
                        <img src="https://www.ajmerdargahsharif.com/img/about-ajmer-dargah.jpg" className="img-fluid w-100 rounded img-thumbnail shadow" alt="" />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 my-2">
                        <div className="lead">
                        <p className="lh-lg">ಮುಯಿನ್ ಅಲ್-ದಿನ್ ಹಸನ್ ಚಿಶ್ತಿ ಸಿಜ್ಜಿ (ಪರ್ಷಿಯನ್: معین الدین چشتی, ರೋಮನೈಸ್ಡ್: Muʿīn al-Dīn Chishtī; ಫೆಬ್ರುವರಿ 1143 - ಮಾರ್ಚ್ 1236), ಪೂಜ್ಯಪೂರ್ವಕವಾಗಿ ಖವಾಜಾ ಘರಿಬ್ ನವಾಜ್ (ಪರ್ಷಿಯನ್: جہی ನೋವಾಸ್, ರೋಮನೈಸ್ಡ್: ಖವಾಜಾ ಘರೀಬ್ ನವಾಜ್), ಪರ್ಷಿಯನ್ ಇಸ್ಲಾಮಿಕ್ ವಿದ್ವಾಂಸ ಮತ್ತು ಸಿಸ್ತಾನ್‌ನ ಅತೀಂದ್ರಿಯರಾಗಿದ್ದರು, ಅವರು ಅಂತಿಮವಾಗಿ 13 ನೇ ಶತಮಾನದ ಆರಂಭದಲ್ಲಿ ಭಾರತೀಯ ಉಪಖಂಡದಲ್ಲಿ ನೆಲೆಸಿದರು, ಅಲ್ಲಿ ಅವರು ಸುನ್ನಿ ಆಧ್ಯಾತ್ಮದ ಚಿಶ್ತಿಯಾ ಕ್ರಮವನ್ನು ಘೋಷಿಸಿದರು. ಈ ನಿರ್ದಿಷ್ಟ ತಾರಿಕಾ (ಆದೇಶ) ಮಧ್ಯಕಾಲೀನ ಭಾರತದಲ್ಲಿ ಪ್ರಬಲವಾದ ಇಸ್ಲಾಮಿಕ್ ಆಧ್ಯಾತ್ಮಿಕ ಕ್ರಮವಾಯಿತು. ನಿಜಾಮುದ್ದೀನ್ ಅವ್ಲಿಯಾ (ಡಿ. 1325) ಮತ್ತು ಅಮೀರ್ ಖುಸ್ರೋ (ಡಿ. 1325) ಸೇರಿದಂತೆ ಹೆಚ್ಚಿನ ಭಾರತೀಯ ಸುನ್ನಿ ಸಂತರು ತಮ್ಮ ಸಂಬಂಧದಲ್ಲಿ ಚಿಶ್ತಿಯಾಗಿದ್ದಾರೆ.</p>
                        <p>ಸುಲ್ತಾನ್ ಇಲ್ತುಮಿಶ್ ಆಳ್ವಿಕೆಯಲ್ಲಿ ದೆಹಲಿ ಸುಲ್ತಾನೇಟ್‌ಗೆ ಆಗಮಿಸಿದ ಮುಯಿನ್ ಅಲ್-ದಿನ್ ಸ್ವಲ್ಪ ಸಮಯದ ನಂತರ ದೆಹಲಿಯಿಂದ ಅಜ್ಮೀರ್‌ಗೆ ಸ್ಥಳಾಂತರಗೊಂಡರು, ಆ ಸಮಯದಲ್ಲಿ ಅವರು ಸುನ್ನಿ ಹನ್ಬಲಿ ವಿದ್ವಾಂಸ ಮತ್ತು ಅತೀಂದ್ರಿಯ ʿAbdallār ānṣṣ (ಅಬ್ದಲ್ಲಾರ್ ಆನ್) ಅವರ ಬರಹಗಳಿಂದ ಹೆಚ್ಚು ಪ್ರಭಾವಿತರಾದರು.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="lead">
                            <p> ಅವರ ಜೀವನದ ಮೇಲೆ ಅವರ ಕೆಲಸ ಆರಂಭಿಕ ಇಸ್ಲಾಮಿಕ್ ಸಂತರು, ತಬಾಕತ್ ಅಲ್-ಶುಫಿಯಾ, ಮುಯಿನ್ ಅಲ್-ದೀನ್ ಅವರ ವಿಶ್ವ ದೃಷ್ಟಿಕೋನವನ್ನು ರೂಪಿಸುವಲ್ಲಿ ಪಾತ್ರವನ್ನು ವಹಿಸಿದ್ದಾರೆ. ಅಜ್ಮೀರ್‌ನಲ್ಲಿದ್ದ ಸಮಯದಲ್ಲಿ ಮುಯಿನ್ ಅಲ್-ದಿನ್ ವರ್ಚಸ್ವಿ ಮತ್ತು ಸಹಾನುಭೂತಿಯ ಆಧ್ಯಾತ್ಮಿಕ ಬೋಧಕ ಮತ್ತು ಶಿಕ್ಷಕ ಎಂಬ ಖ್ಯಾತಿಯನ್ನು ಗಳಿಸಿದರು; ಮತ್ತು ಅವರ ಮರಣದ ನಂತರ ಬರೆದ ಅವರ ಜೀವನದ ಜೀವನಚರಿತ್ರೆಯ ಖಾತೆಗಳು ಅವರು ತಮ್ಮ ಜೀವನದ ಈ ವರ್ಷಗಳಲ್ಲಿ ಅನೇಕ "ಆಧ್ಯಾತ್ಮಿಕ ಅದ್ಭುತಗಳ (ಕಾರಮತ್), ಪವಾಡದ ಪ್ರಯಾಣ, ದಿವ್ಯದೃಷ್ಟಿ ಮತ್ತು ದೇವತೆಗಳ ದರ್ಶನಗಳ" ಉಡುಗೊರೆಗಳನ್ನು ಪಡೆದರು ಎಂದು ವರದಿ ಮಾಡಿದೆ. ಮುಯಿನ್ ಅಲ್-ದಿನ್ ಅವರ ಮರಣದ ನಂತರ ಸರ್ವಾನುಮತದಿಂದ ಮಹಾನ್ ಸಂತ ಎಂದು ಪರಿಗಣಿಸಲಾಗಿದೆ.</p>
                            <p>
                            ಮುಯಿನ್ ಅಲ್-ದಿನ್ ಚಿಶ್ತಿ ಅವರ ಪರಂಪರೆಯು ಪ್ರಾಥಮಿಕವಾಗಿ "ಇಸ್ಲಾಮಿಕ್ ಅತೀಂದ್ರಿಯತೆಯ ವಾರ್ಷಿಕಗಳಲ್ಲಿ ಅತ್ಯಂತ ಮಹೋನ್ನತ ವ್ಯಕ್ತಿಗಳಲ್ಲಿ ಒಬ್ಬರು" ಎಂಬುದರ ಮೇಲೆ ನಿಂತಿದೆ. ಹೆಚ್ಚುವರಿಯಾಗಿ, ಜಾನ್ ಎಸ್ಪೊಸಿಟೊ ಅವರ ಪ್ರಕಾರ ಮುಯಿನ್ ಅಲ್-ದಿನ್ ಚಿಶ್ತಿಯು ಗಮನಾರ್ಹವಾಗಿದೆ, ಅವರ ಅನುಯಾಯಿಗಳು ತಮ್ಮ ಭಕ್ತಿಗಳು, ಪ್ರಾರ್ಥನೆಗಳು ಮತ್ತು ದೇವರ ಸ್ತೋತ್ರಗಳಲ್ಲಿ "ಸಂಗೀತದ ಬಳಕೆ" ಯನ್ನು ಔಪಚಾರಿಕವಾಗಿ ಅಳವಡಿಸಿಕೊಳ್ಳಲು ಅನುಮತಿಸಿದ ಮೊದಲ ಪ್ರಮುಖ ಇಸ್ಲಾಮಿಕ್ ಅತೀಂದ್ರಿಯರಲ್ಲಿ ಒಬ್ಬರಾಗಿದ್ದಾರೆ. 'ವಿದೇಶಿ' ಅರಬ್ ನಂಬಿಕೆಯನ್ನು ಇತ್ತೀಚೆಗೆ ಪ್ರವೇಶಿಸಿದ ಸ್ಥಳೀಯ ಜನರಿಗೆ ಹೆಚ್ಚು ಸಂಬಂಧಿಸುವಂತೆ ಮಾಡಲು ಅವನು ಇದನ್ನು ಮಾಡಿದನು.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container my-5">
            <div className="row text-center">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-2">
                    <div className="card shadow">
                        <img className="card-img-top" src="https://i.ytimg.com/vi/NXXbHLIr01Y/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGEkgZShaMA8=&rs=AOn4CLDWhZTNwg_a2ikAhav15ui01xfI7A" alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">ಹಜರತ್ ಸೂಫಿ ಅಬ್ದುಲ್ ರೆಹಮಾನ್ ಶಾ ಬಾಬಾ</h4>
                            <p className="card-text">ಬೆಳಪು</p>
                        </div>
                    </div>                    
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-2">
                    <div className="card shadow">
                        <img className="card-img-top" src="https://i.ytimg.com/vi/NXXbHLIr01Y/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGEkgZShaMA8=&rs=AOn4CLDWhZTNwg_a2ikAhav15ui01xfI7A" alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">ಹಜರತ್ ಸೂಫಿ ಅಬ್ದುಲ್ ರೆಹಮಾನ್ ಶಾ ಬಾಬಾ</h4>
                            <p className="card-text">ಬೆಳಪು</p>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 my-2">
                    <div className="card shadow">
                        <img className="card-img-top" src="https://i.ytimg.com/vi/NXXbHLIr01Y/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGEkgZShaMA8=&rs=AOn4CLDWhZTNwg_a2ikAhav15ui01xfI7A" alt="Title" />
                        <div className="card-body">
                            <h4 className="card-title">ಹಜರತ್ ಸೂಫಿ ಅಬ್ದುಲ್ ರೆಹಮಾನ್ ಶಾ ಬಾಬಾ</h4>
                            <p className="card-text">ಬೆಳಪು</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center display-5">ತಲುಪು</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="img-thumnail shadow">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7768.592751333183!2d74.76997714019777!3d13.206700120622152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcb194cf6247a7%3A0xc3254ee5470f15f5!2sHazrath%20Khwaja%20Sufi%20Rahmaniya%20Riyaziya%20Dargah!5e0!3m2!1sen!2sin!4v1735822372983!5m2!1sen!2sin" style={{width:'100%', height:"400px"}}  loading="lazy" ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <h1>{t("greeting")}</h1>
                    {/* <p>{line1}</p> */}
                    <span>
                    <Trans
                        //i18nKey ={'description.line1'}
                        i18nKey ={line1}
                        values = {{
                            channel: "Hazrat Sufi Abdul Rehman Shah Baba"
                        }}
                        components={{1:<b/>}}
                    />
                    </span>
                    <p>{line2}</p>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Home