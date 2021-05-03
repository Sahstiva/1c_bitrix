// Глобальный объект для общих методов.
var IV_GLOBAL = {
    initLightBox: function(){
        var $body = $('body');
        var LightBox;
        return  function(links, index, data, hasSocial){
            if($('#live-galery').length == 0){
                $body.append(html);
            }
            LightBox = $('#live-galery');
            blueimp.Gallery(links,  {
                index: index,
                container: '#live-galery',
                onslide: function (index, slide){
                    if(links[index].id.indexOf('live') +1){
                        window.location.replace(location.protocol+"//"+location.host+location.pathname+location.search+"#"+links[index].id.replace('live-','live'));
                    }

                    LightBox.find('.gallery-description-body .fa').removeClass().addClass(data[index]['icon']);
                    LightBox.find('.gallery-title').html(data[index]['description']);
                    LightBox.find('.gallery-date').html(data[index]['date']);
                    //if(hasSocial !== false)
                    //    LightBox.find('.social-links').html(SocialLinks);
                    //if(hasSocial !== false){
                    var sl = LightBox.find('.social-likes-lightbox');
                    if (sl.length) {
                        sl.socialLikes({
                            url: data[index]['soc']['url'],
                            title: data[index]['soc']['title'],
                            counters: true,
                            zeroes: false,
                            forceUpdate: true
                        });
                    }
                    //}

                    LightBox.find('img').attr('alt', data[index]['img-alt']);
                    LightBox.find('img').attr('title', data[index]['img-title']);
                },
                onclose: function () {
                    window.location.hash = '#N';
                }
            });
        };
    },
    getWindowSize: function(){
        var myWidth = 0, myHeight = 0;
        if( typeof( window.innerWidth ) == 'number' ) {
            //Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            //IE 4 compatible
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        var size = {
            width: myWidth,
            height: myHeight
        }
        return size;
    }
};
$(function(){
    // Общие методы.
    document.createElement( "picture" );
    var initSetSiteSlogan = function(){
        var slogans = [
            'Технологично. Честно. Вовремя.',
            'Технологично. Честно. Вовремя.',
            'MVP 1C-Битрикс',
            'Технологично. Честно. Вовремя.',
            'Проблем нет. И не будет.',
            'Все четко. Все работает.',
            'Кадры решают все.',
            '25 человек. 11 лет. 500 сайтов.',
            'Первые в ЮФО.',
            'Москва. Ростов. Волгоград.',
            'Успешные интернет-магазины.',
            'Говорим только правду.',
            'Делаем теплые сайты.',
            'Люди с мозгами. Сайты с душой.',
            'Интернет-маркетинг.',
            'Растем. Растите с нами.',
            'Возвращаем сайты к жизни.',
            'Поддерживаем чужие проекты.',
            'Оптимизация конверсии.',
            'Все по делу. Без тормозов.'];
        var SetSiteSlogan = function(){
            if (slogans && slogans.length > 0){
                var newSlogan = slogans[Math.floor(Math.random() * slogans.length)];
                if(document.getElementById('random_slogan') != null)
                    document.getElementById('random_slogan').innerHTML = newSlogan;
            }
        }

        SetSiteSlogan();
    }
    var initFooterHeight = function(){
        var footer = $('.sticky-footer');
        var push = $('.sticky-push');
        var wrap = $('.sticky-wrap');
        var temp;
        var  setFooterHeight = function(){
            temp = footer.height('auto').outerHeight();
            push.css({height: temp});
            wrap.css({ 'margin-bottom': - temp});
        };
        setFooterHeight(); /* changes by KYS on 13.01.16 */
        $(window).on('resize.initFooterHeight', $.debounce( 500, setFooterHeight));
    }
    var Modifier = function(){
        var TouchKeyboardFix = function(){
            var $body = $('body');
            if(isTouchDevice() || $body.hasClass('touch')){
                $(document)
                    .on('focus', '.form-control ', function(e) {
                        $body.addClass('keyboard');
                    })
                    .on('blur', '.form-control', function(e) {
                        $body.removeClass('keyboard');
                    });
            }
        }
        var ModalSafaryFix = function(){
            $('.modal').on('shown.bs.modal', function(){
                setTimeout( function(){
                    $(window).resize();
                }, 300);
            });
        }
        var getWindowSize = function() {
            var myWidth = 0, myHeight = 0;
            if( typeof( window.innerWidth ) == 'number' ) {
                //Non-IE
                myWidth = window.innerWidth;
                myHeight = window.innerHeight;
            } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
                //IE 6+ in 'standards compliant mode'
                myWidth = document.documentElement.clientWidth;
                myHeight = document.documentElement.clientHeight;
            } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
                //IE 4 compatible
                myWidth = document.body.clientWidth;
                myHeight = document.body.clientHeight;
            }
            var size = {
                width: myWidth,
                height: myHeight
            }

            return size;
        }
        var Navbar = function(){
            var element  = $('.navbar-intervolga');
            var toggle = function(){
                if(element.find('.container, .container-fluid').outerWidth() < element.find('.navbar-nav').outerWidth()){
                    element.find('.container').removeClass('container').addClass('container-fluid');
                }
                else{
                    element.find('.container-fluid').removeClass('container-fluid').addClass('container');
                }
                element.find('.navbar-collapse').css({'max-height': getWindowSize().height - 51});
            }
            toggle();
            $(window).on('resize.Modifier', $.debounce( 500, toggle));
        }
        var operaMini = function(){
            if(navigator.userAgent.match(/Opera Mini/) != null){
                $('html').addClass('opera-mini')
            }else{
                $('html').addClass('no-opera-mini')
            }
        }

        operaMini();
        $(window).on('load.Modifier', Navbar);
        $(window).on('load.Modifier', ModalSafaryFix);
        $(window).on('load.Modifier', TouchKeyboardFix);
    }



    // инициализация живой ленты на главной и страницe жизнь.
    var initLive = function(){
        var wrapper =  $('.live-list-wrap');
        wrapper =  wrapper.length ? wrapper  : $('.live-list-detail');
        var slider = wrapper.find('.live-list');
        var temp;
        var winSize = function(){
            var size = {
                width: 0,
                height: 0
            }
            if( typeof( window.innerWidth ) == 'number' ) {
                //Non-IE
                size.width = window.innerWidth;
                size.height = window.innerHeight;
            } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
                //IE 6+ in 'standards compliant mode'
                size.width = document.documentElement.clientWidth;
                size.height = document.documentElement.clientHeight;
            } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
                //IE 4 compatible
                size.width = document.body.clientWidth;
                size.height = document.body.clientHeight;
            }
            return size;
        };
        var resize = function(){
            temp = winSize().width;

            slider.trigger("configuration", {
                auto: false,
                responsive: false,
                circular: false,
                infinite: false,

                next: '.live-pagination .next',
                prev: '.live-pagination .prev',
                scroll:{
                    items: 'page',
                    duration: 250,
                    fx: 'crossfade',
                    easing: 'linear'
                },
                items:{
                    visible: 4
                }
            });
            if(temp < 992 && temp >= 500){
                slider.trigger("configuration", {
                    scroll:{
                        items: 2,
                        duration: 500
                    },
                    items:{
                        visible: 2
                    },
                    reInit: false
                });
            }
            if(temp < 500){
                slider.trigger("configuration", {
                    scroll:{
                        items: 1,
                        duration: 250
                    },
                    items:{
                        visible: 1
                    },
                    reInit: false
                });
            }
        };
        var getData = function(){
            var temp = [];
            wrapper.find('[data-blueimp]').closest('.live-list-item').each(function(){
                temp.push({
                    icon: $(this).find('.live-item-label .fa').attr('class'),
                    description: $(this).find('.live-item-description').html(),
                    date: $(this).find('.live-item-data').html(),
                    soc: {
                        url: $(this).attr('data-soc-url'),
                        title: $(this).attr('data-soc-title')
                    },
                    "img-alt": $(this).find('img').attr('alt'),
                    "img-title": $(this).find('img').attr('title')
                });
            });
            return temp;
        }
        var lightBox = IV_GLOBAL.initLightBox();
        var toggleLightBox = function(){
            if(wrapper.length){
                var date;
                var index;
                var $this;
                var links = wrapper.find('[data-blueimp]');
                wrapper.delegate('.live-item-body.image', 'click', function(e){
                    date = getData();
                    if(navigator.userAgent.match(/Opera Mini/) == null){
                        if(!$(e.target).is('a:not([data-blueimp])')){
                            e.preventDefault();
                            $this = $(this);
                            index = wrapper.find('.image').index($this);
                            links = wrapper.find('[data-blueimp]');
                            lightBox(links, index, date, true);
                            return false;
                        }
                    }


                });

            }
        }
        var startSlider = function(){
            slider.length && slider.carouFredSel({
                auto: false,
                responsive: false,
                circular: false,
                infinite: false,

                next: $('.live-main').find('[href="#next"]'),
                prev: $('.live-main').find('[href="#prev"]'),
                scroll:{
                    items: 'page',
                    duration: 250,
                    fx: 'crossfade',
                    easing: 'linear'
                },
                items:{
                    visible: 4
                },
                swipe:{
                    onTouch: true,
                    onMouse: true
                },
                onCreate: function(){
                    $(window).on('resize', $.debounce( 1500, resize));

                }
            });
        }
        if(slider.length){
            $(window).on('load.initLive', startSlider);
        }

        if(wrapper.length){
            $(window).on('load.initLive', toggleLightBox);
            $(window).on('load', function(){
                var date = getData();
                var index;
                var $this;
                var links = wrapper.find('[data-blueimp]');
                var hash = window.location.hash.replace('live','live-');
                if(window.location.hash.indexOf('#live') + 1 && $(hash).length){
                    index = links.index($(hash));
                    lightBox(links, index, date, true);
                }
                else if(window.location.hash.indexOf('#live') + 1){
                    $.post('', {'whatsup':window.location.hash}, function(data){
                        if (data) {
                            wrapper.append(data);
                            date = getData();
                            links = wrapper.find('[data-blueimp]');
                            hash = window.location.hash.replace('live','live-');
                            if(window.location.hash.indexOf('#live') + 1 && $(hash).length){
                                index = links.index($(hash));
                                lightBox(links, index, date, true);
                                //date[index].soc.socialLikes({
                                //    counters: true,
                                //    zeroes: false
                                //});
                            }else{
                                return false;
                            }
                        }else{
                            return false;
                        }
                    });
                }
                else{
                    return false;
                }
            });
        }


    }

    // Слайдер страницы портфолио
    var initPortfolio = function(){
        var wrapper = $('.portfolio-works-slider');
        var slider = wrapper.find('.slider-inner');
        var lightBox = IV_GLOBAL.initLightBox();
        var getData = function(){
            var temp = [];
            wrapper.find('[data-blueimp]').each(function(){
                temp.push({
                    icon: typeof ($(this).attr('data-icon')) != 'undefined' ? $(this).attr('data-icon') : 'fa fa-image',
                    description: typeof ($(this).attr('title')) != 'undefined' ? $(this).attr('title') : '',
                    date: typeof ($(this).attr('data-date')) != 'undefined' ? $(this).attr('data-date') : '',
                    soc: '' // Alexeev
                });
            });
            return temp;
        }
        var startSlider = function(){
            slider.length && slider.carouFredSel({
                width: '100%',
                auto: false,
                scroll: 1,
                align: "center",
                items:{

                },
                swipe:{
                    onTouch: true,
                    onMouse: true
                },
                next: wrapper.find('.slider-next'),
                prev: wrapper.find('.slider-prev'),
                onCreate: function(data){
                    var links= $('[data-blueimp]');
                    var data = getData();
                    var index = 0;
                    links.on('click.initPortfolio', function(e){
                        links = $('[data-blueimp]');
                        index = wrapper.find('[data-blueimp]').index($(this));
                        lightBox(links, index, data, false)
                        return false;
                    });
                }
            });
        }

        if(slider.length)
            $(window).on('load.initPortfolio', startSlider);
    }

    // Используеться в главном слайдере и в слайдере на странице портфолио.
    var initSliderResponsive = function(){
        var wrapper = $('.slider-responsive');
        var slider = $('.slider-responsive-inner');
        var panel = $('.slider-responsive-panel');
        var isMin = slider.find('.slider-responsive-inner-item').length < 2;
        var selectedItem = {};
        var defaultItem = {};
        var long;
        var tempSize;
        var getWindowSize = function() {
            var myWidth = 0, myHeight = 0;
            if( typeof( window.innerWidth ) == 'number' ) {
                //Non-IE
                myWidth = window.innerWidth;
                myHeight = window.innerHeight;
            } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
                //IE 6+ in 'standards compliant mode'
                myWidth = document.documentElement.clientWidth;
                myHeight = document.documentElement.clientHeight;
            } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
                //IE 4 compatible
                myWidth = document.body.clientWidth;
                myHeight = document.body.clientHeight;
            }
            var size = {
                width: myWidth,
                height: myHeight
            }
            return size;
        }
        var getMinMarge = function( newItems ) {
            var minMarg;
            try{
                var center  = newItems.eq(0).outerWidth(true) + (newItems.eq(1).outerWidth(true) / 2);
                minMarg = ($(window).width() / 2) - center;
            }catch (e){
                minMarg = 0;
            }


            return minMarg;
        }
        var resize = function(){
            long = getWindowSize().width > 1400;
            if(tempSize === long) return;
            tempSize = long;
            slider.trigger('destroy', {origOrder: true});
            startSlider();
        }
        var calculateHeight = function(){
            slider.parent().height(slider.find('.slider-responsive-inner-item').height());
            slider.height(slider.find('.slider-responsive-inner-item').height());
            if(long && !isMin){
                slider.parent().css({
                    'marginLeft': getMinMarge($('.slider-responsive-inner-item').slice(0, 2) )
                });
            }
        }
        var toggleHeight = function(){
            var container = $('.toggle-height', wrapper);
            var check = $('[data-toggle="radio-switch"]', panel);
            var listCurrent = check.data('slides');
            check.length && check.bootstrapSwitch({
                size: 'mini',
                onText: 'off',
                offText: 'on',
                inverse: true
            });
            check.on('switchChange.bootstrapSwitch', function(event, state) {
                if(state){
                    panel.addClass('active');
                    container.addClass('active');
                    startSlider();
                    cookiesHelper.set('slider_state', 'show', {
                        expires: 30 * 24 * 60 * 60,
                        path: '/'
                    });
                }
                else{
                    panel.removeClass('active');
                    container.removeClass('active');
                    cookiesHelper.set('slider_state', 'hide', {
                        expires: 30 * 24 * 60 * 60,
                        path: '/'
                    });
                }
            });
            if(check.length){
                var sliderCookie = cookiesHelper.get('slider_state');
                var listSaved = cookiesHelper.get('slides_list');
                if(listSaved == null || listSaved != listCurrent){
                    cookiesHelper.set('slides_list', listCurrent, {
                        expires: 30 * 24 * 60 * 60,
                        path: '/'
                    });
                    sliderCookie = null;
                }
                if(sliderCookie == null || sliderCookie == 'show'){
                    check.bootstrapSwitch('state', true, true);
                    panel.addClass('active');
                    container.addClass('active');
                    startSlider();
                    if(sliderCookie == null){
                        cookiesHelper.set('slider_state', 'hide', {
                            expires: 30 * 24 * 60 * 60,
                            path: '/'
                        });
                    }
                }
            }
        }
        var startSlider = function(){
            long = getWindowSize().width > 1400;
            if (slider.children('.slider-responsive-inner-item').length == 1) {
                slider.addClass('one-img');
                $('.slider-responsive-controls').hide();
                return;
            };
            tempSize = long;
            slider.length && slider.carouFredSel({
                responsive: !long || isMin,
                circular: true,
                auto: false,
                infinite: true,
                width: long && !isMin ? 10000000: null,
                align: isMin ? 'center' : false,
                height: 0,
                next: wrapper.find('[href="#next"]'),
                prev: wrapper.find('[href="#prev"]'),
                items: {
                    minimum: 2,
                    visible: long && !isMin ? 3 : 1,
                    start: long && !isMin ? -1: 0
                },
                swipe: {
                    onMouse: !isMin && true,
                    onTouch: !isMin && true
                },
                scroll: {
                    items: 1,
                    duration: 700,
                    onBefore: function( data ) {
                        $(this).parent().animate({
                            'marginLeft': long && !isMin ? getMinMarge( data.items.visible ) : 0
                        }, data.scroll.duration);
                        data.items.old.eq(+long).animate(defaultItem, data.scroll.duration).removeClass('active');
                        data.items.visible.eq(+long).animate(selectedItem, data.scroll.duration).addClass('active');

                    }
                },
                onCreate: function(data){
                    $(this).parent().css({
                        'marginLeft': long && !isMin ? getMinMarge( data.items ): 0
                    });
                    $(this).children().not(':eq("'+(+long)+'")').css(defaultItem);
                    slider.parent().height(slider.find('.slider-responsive-inner-item').height());
                    slider.height(slider.find('.slider-responsive-inner-item').height());

                }
            });
        }
        if(panel.length){
            $(window).on('load', toggleHeight);
            $(window).on('resize', $.debounce(500, calculateHeight));
            $(window).on('resize', $.debounce(500, resize));
        } else if(slider.length){
            $(window).on('load.initSliderResponsive', startSlider);
            $(window).on('resize', $.debounce(500, resize));
            $(window).on('resize', $.debounce(500, calculateHeight));

        }

    }

    // Разработка сайтов, Интернет-маркетинг, Тех. поддержка
    var Activities = function(){

        var activities = $('.activities-description .tab-content').closest('.activities-description');
        var item = activities.find('.item');
        var active;
        var resize = function(){
            active = activities.find('.item.active').height();
            activities.find('.activities-inner').css({
                'padding-bottom': active
            });
        }
        if(typeof ($.fx.eqHeight) != 'undefined'){
            $('.activities-inner').eqHeight({
                eqdisable: '[0;768)',
                target: '.item'
            });
        }

        $(window).on('load.Activities', resize);
        $(window).on('resize.Activities', $.debounce(250, resize));






        $(window).on('load.activities', function(){

        });

    }

    // Вызовы
    initSetSiteSlogan();
    initFooterHeight();
    Modifier();
    initLive();
    initPortfolio();
    initSliderResponsive();
    Activities();


});






//window.LiveLiteBoxResize = function(){
//    var $this = $('#live-galery');
//    if($this.is(':visible')){
//        var size = window.getWindowSize();
//        if(size.width>768){
//            var footerHeight = $('.blueimp-gallery-description').outerHeight();
//            $this.find('.slides').animate({
//                'padding-bottom' : footerHeight + 10
//            });
//        }
//        else{
//            $this.find('.slides').animate({
//                'padding-bottom' :  10
//            });
//        }
//
//    }
//}
