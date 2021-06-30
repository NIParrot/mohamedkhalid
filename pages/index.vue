<template>
  <div class="large" dir="rtl" role="main">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav m-auto text-center">
            <li class="nav-item active">
              <a class="nav-link" href="">الرئيسية</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">النظام الغذائي</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">دكتور متخصص</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">المدونه</a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="header2">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6">
              <h1 class="heading-primary">
                <span class="heading-primary-main animated fadeInDown"
                  >ابقي في
                </span>
                <span class="heading-primary-sub animated fadeInUp d-block"
                  >المنزل</span
                >
              </h1>
              <p class="wow fadeInRight paragraph">
                نوفرلك معرفه نتائج تحليل و توفير برنامج للتعافي
                <br />
                او تساعدك في وقايه عائلتك
              </p>
              <a class=" start btn_scale_hover" href="#"> ابدا الان </a>
            </div>
            <div class="col-md-6 wow fadeInLeft">
              <img src="@/assets/img/house.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="steps">
      <div class="container-fluid">
        <div class="site-section text-center">
          <h2>خطواتنا الي شفائك</h2>
        </div>
        <div class="row">
          <div class="col-md-7">
            <img src="@/assets/img/steps.jpg" class="img-fluid" alt="" />
          </div>
          <div class="col-md-1"></div>
          <div
            class="col-md-4 m-auto ordered wow bounceInLeft text_step"
            data-wow-duration="1s"
            data-wow-offset="200"
          >
            <ol class="text-right">
              <li>تشخيص الحاله</li>
              <li>ترشيح اطباء</li>
              <li>ترشيح اقرب مستشفيات العزل</li>
              <li>نظام غذائي و علاجي للشفاء</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="syndrome text-right">
      <div class="container">
        <div class="site-section text-center">
          <h2>اعراض المرض</h2>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="tabs-choose">
              <div class="row">
                <div class="col-4">
                  <a
                    @click="activeTab = '1'"
                    :class="[activeTab === '1' ? 'active' : '']"
                    class="d-block text-center"
                  >
                    الاعراض الاكثر شيوعا
                  </a>
                </div>
                <div class="col-4">
                  <a
                    @click="activeTab = '2'"
                    :class="[activeTab === '2' ? 'active' : '']"
                    class="d-block text-center"
                  >
                    الاعراض الاقل شيوعا
                  </a>
                </div>
                <div class="col-4">
                  <a
                    @click="activeTab = '3'"
                    :class="[activeTab === '3' ? 'active' : '']"
                    class="d-block text-center"
                  >
                    الاعراض الخطيره
                  </a>
                </div>
              </div>
            </div>
            <div class="tabs-content">
              <div class="content-one" v-if="activeTab === '1'">
                <ol>
                  <li>حــمّــى</li>
                  <li>ســعــال جــاف</li>
                  <li>ارهــاق</li>
                </ol>
              </div>
              <div class="content-two" v-if="activeTab === '2'">
                <ol>
                  <div class="row">
                    <div class="col-md-6">
                      <li>الام و الاوجاع</li>
                    </div>
                    <div class="col-md-6">
                      <li>التهاب الحلق</li>
                    </div>
                    <div class="col-md-6">
                      <li>اسهال</li>
                    </div>
                    <div class="col-md-6">
                      <li>التهاب الحق</li>
                    </div>
                    <div class="col-md-6">
                      <li>صداع</li>
                    </div>
                    <div class="col-md-6">
                      <li>فقدان حاشه الشم او التذوق</li>
                    </div>
                  </div>
                  <li>
                    طفح جلدي، أو تغير في لون أصابع اليدين أو أصابع القدمين
                  </li>
                </ol>
              </div>
              <div class="content-three" v-if="activeTab === '3'">
                <ol>
                  <li>صعوبه او ضيق في التنفس</li>
                  <li>الم و ضغط في الصدر</li>
                  <li>فقدان القدرة على الكلام أو الحركة</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="method text-right">
      <div class="list_item">
        <div class="container">
          <div class="site-section">
            <h2>كيف تحمي نفسك</h2>
          </div>
          <!-- Corona animation container -->
          <div class="row">
            <div class="col-lg-6">
              <div class="animatediv text-center">
                <img
                  src="@/assets/img/corona-virus.png"
                  class="img-fluid"
                  alt="ابقي في المنزل"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="text-center">
                <img
                  src="@/assets/img/people-mask.png"
                  class="TopImage"
                  alt="خطواتنا الي شفائك"
                />
                <ul class="menu shadow m-auto">
                  <li>
                    <a href="#CleanYourHand">نظف يديك كثيرًا</a>
                  </li>

                  <li>
                    <a href="#AvoidCloseContact">تجنب الاتصال الوثيق</a>
                  </li>

                  <li>
                    <a href="#StayHome">ابق في المنزل إذا كنت مريضًا</a>
                  </li>

                  <li>
                    <a href="#CoverCoughs">غطِّ السعال والعطس</a>
                  </li>

                  <li>
                    <a href="#WearAFacemask"
                      >ارتدِ قناعًا للوجه إذا كنت مريضًا</a
                    >
                  </li>

                  <li>
                    <a href="#CleanAndDisinfect">نظف وطهر </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Free Space container  -->
      <div style="margin-top: 9%"></div>
      <!-- Message Boxes  -->
      <div class="item_det">
        <div class="container">
          <h2>اغسل يديك</h2>
          <div class="messagebox shadow" id="CleanYourHand">
            <ul>
              <li>
                <strong> اغسل يديك </strong>
                غالبًا بالماء والصابون لمدة 20 ثانية على الأقل خاصة بعد التواجد
                في مكان عام أو بعد نفث أنفك أو السعال أو العطس.
              </li>
              <li>
                إذا لم يكن الصابون والماء متوفرين بسهولة ،
                <strong>
                  استخدم معقم اليدين الذي يحتوي على 60٪ كحول على الأقل </strong
                >. قم بتغطية جميع أسطح يديك وفركها معًا حتى تشعر بالجفاف.
              </li>
              <li>
                <strong> تجنب اللمس </strong>
                <strong> عينيك وأنفك وفمك </strong>
                بأيدي غير مغسولة.
              </li>
            </ul>
          </div>
          <h2>تجنب الاتصال الوثيق</h2>
          <div class="messagebox shadow" id="AvoidCloseContact">
            <ul>
              <li>
                <strong> تجنب الاتصال الوثيق </strong>
                مع المرضى
              </li>
              <li>
                ضع <strong> المسافة بينك وبين الآخرين </strong>
                <strong> الناس </strong>
                إذا كان COVID-19 ينتشر في مجتمعك. هذا مهم بشكل خاص للأشخاص
                المعرضين لخطر الإصابة بمرض شديد.
              </li>
            </ul>
          </div>
          <h2>ابق في المنزل</h2>
          <div class="messagebox shadow" id="StayHome">
            <strong> ابق في المنزل </strong>
            إذا كنت مريضًا ، إلا للحصول على رعاية طبية. تعلم ماذا تفعل إذا كنت
            مريضا.
          </div>
          <h2>تغطية السعال</h2>
          <div class="messagebox shadow" id="CoverCoughs">
            <ul>
              <li>
                <strong> غطي فمك وأنفك </strong>
                بمنديل ورقي عند السعال أو العطس أو استخدام الكوع من الداخل.
              </li>
              <li>
                <strong> رمي المناديل المستعملة </strong>
                في سلة المهملات.
              </li>
              <li>
                فورا<strong> اغسل يديك</strong>
                بالماء والصابون لمدة 20 ثانية على الأقل. إذا لم يتوافر الماء
                والصابون بسهولة ، نظف يديك بمطهر لليدين يحتوي على 60٪ كحول على
                الأقل.
              </li>
            </ul>
          </div>
          <h2>ارتدي قناع للوجه</h2>
          <div class="messagebox shadow" id="WearAFacemask">
            <ul>
              <li>
                <strong> ان كنت مريضا: </strong>
                يجب عليك ارتداء قناع الوجه عندما تكون بالقرب من أشخاص آخرين (على
                سبيل المثال ، مشاركة غرفة أو سيارة) وقبل دخول مكتب مقدم الرعاية
                الصحية. إذا لم تكن قادرًا على ارتداء قناع الوجه (على سبيل المثال
                ، لأنه يسبب صعوبة في التنفس) ، فعليك بذل قصارى جهدك لتغطية
                السعال والعطس ، ويجب على الأشخاص الذين يعتنون بك ارتداء قناع
                الوجه إذا دخلوا غرفتك.
              </li>

              <li>
                <strong> إذا لم تكن مريضا: </strong>
                لا تحتاج إلى ارتداء قناع الوجه إلا إذا كنت تعتني بشخص مريض (ولا
                يمكنه ارتداء قناع الوجه). قد يكون هناك نقص في أقنعة الوجه ويجب
                حفظها لمقدمي الرعاية.
              </li>
            </ul>
          </div>
          <h2>نظف وطهر</h2>
          <div class="messagebox shadow" id="CleanAndDisinfect">
            <ul>
              <li>
                <strong>
                  نظف وعقم الأسطح التي يتم لمسها بشكل متكرر يوميًا
                </strong>
                . يشمل ذلك الطاولات ومقابض الأبواب ومفاتيح الإضاءة وأسطح العمل
                والمقابض والمكاتب والهواتف ولوحات المفاتيح والمراحيض والحنفيات
                والمصارف.
              </li>
              <li>
                <strong> إذا كانت الأسطح متسخة ، فقم بتنظيفها: </strong>
                استخدم المنظفات أو الصابون والماء قبل التطهير.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="know text-right">
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h2>
              <p>اعرف</p>
              تفاصيل اكتر و تابع تطورات المرض و
              <br />
              طريقه التغلب عليه
            </h2>
          </div>
          <div class="col-md-3"></div>
          <div class="col-md-2 m-auto">
            <nuxt-link to="/login" class="btn btn_scale_hover"
              >اذهب للمدونة</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="slider">
      <div class="container m-auto">
        <figure class="icon-cards mt-3">
          <div class="icon-cards__content">
            <div
              class="icon-cards__item d-flex align-items-center justify-content-center"
            >
              <span class="h1"></span>
            </div>
            <div
              class="icon-cards__item d-flex align-items-center justify-content-center"
            >
              <span class="h1"></span>
            </div>
            <div
              class="icon-cards__item d-flex align-items-center justify-content-center"
            >
              <span class="h1"></span>
            </div>
          </div>
        </figure>
      </div>
    </div>
    <div class="question text-right">
      <div class="container">
        <div class="site-section text-center">
          <h2>الاسئله الاكثر شيوعا</h2>
        </div>

        <div class="accordion" id="accordionExample">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h2 class="mb-0">
                <button
                  class="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  ما هو فيروس كورونا
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                فيروسات كورونا فصيلة واسعة الانتشار معروفة بأنها تسبب أمراضاً
                تتراوح من نزلات البرد الشائعة إلى الاعتلالات الأشد وطأة مثل
                متلازمة الشرق الأوسط التنفسية (MERS) ومتلازمة الالتهاب الرئوي
                الحاد الوخيم (السارس).
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  ما هو مرض كوفيد 19
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                كوفيد-19 هو المرض الناجم عن فيروس كورونا المُستجد المُسمى فيروس
                كورونا-سارس- 2. وقد اكتشفت المنظمة هذا الفيروس المُستجد لأول مرة
                في 31 كانون الأول/ ديسمبر 2019، بعد الإبلاغ عن مجموعة من حالات
                الالتهاب الرئوي الفيروسي في يوهان بجمهورية الصين الشعبية.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  ما هو فيروس كورونا المستجد
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                يتمثل فيروس كورونا الجديد في سلالة جديدة من فيروس كورونا لم
                تُكشف إصابة البشر بها سابقاً.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFour">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  ما هي اعراض كوفيد 19
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              class="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                تتمثل أعراض كوفيد-19 الأكثر شيوعاً فيما يلي: الحمى السعال الجاف
                الإجهاد وتشمل الأعراض الأخرى الأقل شيوعاً التي قد تصيب بعض
                المرضى ما يلي: فقدان الذوق والشم، احتقان الأنف، التهاب الملتحمة
                (المعروف أيضاً بمسمى احمرار العينين)، ألم الحلق، الصداع، آلام
                العضلات أو المفاصل، مختلف أنماط الطفح الجلدي، الغثيان أو القيء،
                الإسهال، الرعشة أو الدوخة. وعادة ما تكون الأعراض خفيفة، ويصاب
                بعض الأشخاص بالعدوى ولكن لا تظهر عليهم إلا أعراض خفيفة للغاية أو
                لا تظهر عليهم أي أعراض بالمرة. وتشمل العلامات التي تشير إلى مرض
                كوفيد-19 الوخيم ما يلي: ضيق النفس، انعدام الشهية، التخليط أو
                التشوش، الألم المستمر أو الشعور بالضغط على الصدر، ارتفاع درجة
                الحرارة (أكثر من 38 درجة مئوية). وتشمل الأعراض الأخرى الأقل
                شيوعاً ما يلي: سرعة التهيّج، التخليط/التشوش، انخفاض مستوى الوعي
                (الذي يرتبط أحياناً بالنوبات)، القلق، الاكتئاب، اضطرابات النوم،
                مضاعفات عصبية أشد وخامة ونُدرة مثل السكتات الدماغية والتهاب
                الدماغ والهذيان وتلف الأعصاب. وينبغي للأشخاص من جميع الأعمار
                الذين يعانون من الحمى و / أو السعال المرتبط بصعوبة التنفس أو ضيق
                النفس، والشعور بالألم أو بالضغط في الصدر، أو فقدان النطق أو
                الحركة، التماس الرعاية الطبية على الفور. اتصل أولاً إن أمكن
                بمقدم الرعاية الصحية أو الخط الساخن أو المرفق الصحي، لتوجيهك إلى
                العيادة الملائمة.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingFive">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  ما الذي يحدث للأشخاص المصابين بكوفيد-19؟
                </button>
              </h2>
            </div>
            <div
              id="collapseFive"
              class="collapse"
              aria-labelledby="headingFive"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                يتعافى من المرض معظم الأشخاص (نحو 80%) الذين تظهر عليهم الأعراض
                دون الحاجة إلى العلاج في المستشفى. ويصاب نحو 15% منهم بمضاعفات
                خطيرة ويحتاجون إلى الأكسجين، ويصبح 5% منهم في حالة حرجة ويحتاجون
                إلى العناية المركزة.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSex">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSex"
                  aria-expanded="false"
                  aria-controls="collapseSex"
                >
                  هل يمكن أن يُصاب البشر بالعدوى بفيروس كورونا مستجد من مصدر
                  حيواني؟
                </button>
              </h2>
            </div>
            <div
              id="collapseSex"
              class="collapse"
              aria-labelledby="headingSex"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                خلصت التحريات المفصّلة إلى أن فيروس كورونا المسبب لمتلازمة
                الالتهاب الرئوي الحاد الوخيم (السارس) قد انتقلت من قطط الزباد
                إلى البشر في الصين عام 2002، فيما انتقل فيروس كورونا المسبب
                لمتلازمة الشرق الأوسط التنفسية (Mers) من الإبل إلى البشر في
                المملكة العربية السعودية في عام 2012. وهناك العديد من سلالات
                فيروس كورونا الأخرى المعروفة التي تسري بين الحيوانات دون أن
                تنتقل العدوى منها إلى البشر حتى الآن. ومن المرجح أن يتم الكشف عن
                سلالات جديدة من الفيروس مع تحسّن وسائل الترصّد حول العالم.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingSeven">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  ما هي أعراض الإصابة بفيروس كورونا؟
                </button>
              </h2>
            </div>
            <div
              id="collapseSeven"
              class="collapse"
              aria-labelledby="headingSeven"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                تتوقف الأعراض على نوع الفيروس، لكن أكثرها شيوعاً ما يلي: الأعراض
                التنفسية، والحمّى، والسعال، وضيق النفس وصعوبة التنفس. وفي
                الحالات الأشد وطأة، قد تسبب العدوى الالتهاب الرئوي والمتلازمة
                التنفسية الحادة الوخيمة والفشل الكلوي وحتى الوفاة.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingEight">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  ما هي الفئات الأشد تعرضاً لمخاطر الإصابة بالمرض الوخيم الناجم
                  عن كوفيد-19؟
                </button>
              </h2>
            </div>
            <div
              id="collapseEight"
              class="collapse"
              aria-labelledby="headingEight"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                تزداد مخاطر الإصابة بمضاعفات وخيمة بين الأشخاص البالغين 60 عاماً
                أو أكثر من العمر، والأشخاص الذين يعانون من مشكلات طبية كامنة،
                مثل ارتفاع ضغط الدم أو مشكلات القلب والرئتين، أو داء السكري أو
                السمنة أو السرطان. ومع ذلك فقد يصاب أي شخص بعدوى كوفيد-19 ويعاني
                من مضاعفات خطيرة أو يتوفى في أي عمر كان.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingNine">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  هل هناك آثار طويلة الأجل لكوفيد-19؟
                </button>
              </h2>
            </div>
            <div
              id="collapseNine"
              class="collapse"
              aria-labelledby="headingNine"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                تستمر معاناة بعض الأشخاص الذين أُصيبوا بكوفيد- 19 من الأعراض ،
                سواء احتاجوا إلى دخول المستشفى أم لا، بما في ذلك الشعور بالإجهاد
                والأعراض التنفسية والعصبية. وتعمل المنظمة مع شبكتها التقنية
                العالمية للتدبير العلاجي السريري لكوفيد-19 والباحثين ومجموعات
                المرضى في جميع أنحاء العالم، لتصميم الدراسات وإجرائها على المرضى
                الذين تجاوزوا المسار الأولي الحاد للمرض، بغية تحديد نسبة المرضى
                الذين يصابون بآثار طويلة الأجل ومدة استمرار هذه الآثار وأسباب
                حدوثها. وسوف تُستخدم هذه الدراسات في تطوير المزيد من الإرشادات
                الخاصة برعاية المرضى.
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTen">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  كيف يمكننا حماية الآخرين وحماية أنفسنا من العدوى إذا لم نكن
                  نعلم من ‏المصاب بها؟
                </button>
              </h2>
            </div>
            <div
              id="collapseTen"
              class="collapse"
              aria-labelledby="headingTen"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                حافظ على سلامتك باتخاذ بعض الاحتياطات البسيطة، مثل التباعد
                البدني ولبس الكمامة، لاسيما عندما يتعذر الحفاظ على التباعد
                البدني، والحفاظ على التهوية الجيدة في الغرف، وتلافي التجمعات
                والمخالطة عن قرب، وتنظيف يديك بانتظام، والسعال في مرفقك المثني
                أو في منديل ورقي. وتحقق من النصائح المحلية في المكان الذي تعيش
                وتعمل فيه. افعل كل ذلك معاً!
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingEleven">
              <h2 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseEleven"
                  aria-expanded="false"
                  aria-controls="collapseEleven"
                >
                  هل يوجد لقاح ضد فيروس كورونا المستجد؟
                </button>
              </h2>
            </div>
            <div
              id="collapseEleven"
              class="collapse"
              aria-labelledby="headingEleven"
              data-parent="#accordionExample"
            >
              <div class="card-body">
                عندما يظهر مرض جديد فلا يتوفر له أي لقاح ما لم يتم تصنيعه أولاً.
                وقد يستغرق الأمر عدة سنوات قبل التوصل إلى تصنيع لقاح ضد الفيروس.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="father">
    <button class="show">one</button>
    <div class="disc">
    <p>bla bla bla 1</p>
        </div>
    <button class="show">tow</button>
    <div class="disc">
    <p>bla bla bla 2</p>
        </div>
    <button class="show">three</button>
    <div class="disc">
    <p>bla bla bla 3</p>
    </div>
    </div>-->
  </div>
</template>

<style scoped>
.navbar {
  background: transparent;
}
.btn,
.navbar .navbar-nav > a.btn,
.btn:hover,
.btn:focus,
.btn:active,
.btn.active,
.btn:active:focus,
.btn:active:hover,
.btn.active:focus,
.btn.active:hover,
.navbar .navbar-nav > a.btn:hover,
.navbar .navbar-nav > a.btn:focus,
.navbar .navbar-nav > a.btn:active,
.navbar .navbar-nav > a.btn.active,
.navbar .navbar-nav > a.btn:active:focus,
.navbar .navbar-nav > a.btn:active:hover,
.navbar .navbar-nav > a.btn.active:focus,
.navbar .navbar-nav > a.btn.active:hover {
  background: #fff;
}
body{
  background: transparent !important;
  color: transparent !important;
}
ul{
color: inherit;
font-size: 1rem;
}
.item_det h2{
color: inherit;
}
.card-header {
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0,0,0,.03);
    border-bottom: 1px solid rgba(0,0,0,.125);
}
ul li, ol li{
  color: inherit;
  margin: 0;
}
.card{
  border-radius: 0;
  margin: 0;
  box-shadow: none;
}

</style>

<script>
import 'wowjs/css/libs/animate.css'
import 'animate.css'
import { WOW } from 'wowjs'
console.log('Hello Ahmed')

export default {
  head() {
    return {
      link: [{ rel: 'stylesheet', href: '~/assets/style.scss' }],
    }
  },

  name: 'index',
  layout(context) {
    return 'main'
  },
  data() {
    return {
      activeTab: '1',
    }
  },
  mounted() {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
    })
    wow.init()
    console.log('Hello')
    // var btn = document.getElementsByClassName('show'),
    //   i
    // for (i = 0; i < btn.length; i++) {
    //   btn[i].addEventListener('click', function () {
    //     'use strict'
    //     this.classList.toggle('active')
    //     var disc = this.nextElementSibling
    //     if (disc.style.maxHeight) {
    //       disc.style.maxHeight = null
    //     } else {
    //       disc.style.maxHeight = disc.scrollHeight + 'px'
    //     }
    //   })
    // }
  },
}
</script>
