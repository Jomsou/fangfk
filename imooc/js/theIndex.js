/**
 * Created by Administrator on 2016/6/27.
 */
$(function () {
    $(".index-list>li").eq(2).css("marginRight",0);
    $(".index-list>li").eq(5).css("marginRight",0);

    //�������ϵĸ�����ʾ������
    $(".nav-item li:eq(0)").mouseenter(function () {
       $(".nav-item li:eq(0)").css("backgroundColor","#363C41");
    });
    $(".nav-item li:eq(0)").mouseleave(function () {
        $(".nav-item li:eq(0)").css("backgroundColor","black");
    });


    $(".nav-item li:eq(1)").mouseenter(function () {
        $(".nav-item li:eq(1)").css("backgroundColor","#363C41");
    });
    $(".nav-item li:eq(1)").mouseleave(function () {
        $(".nav-item li:eq(1)").css("backgroundColor","black");
    });



    $(".nav-item li:eq(2)").mouseenter(function () {
        $(".nav-item li:eq(2)").css("backgroundColor","#363C41");
    });
    $(".nav-item li:eq(2)").mouseleave(function () {
        $(".nav-item li:eq(2)").css("backgroundColor","black");
    });
    $(".nav-item li:eq(3)").mouseenter(function () {
        $(".nav-item li:eq(3)").css("backgroundColor","#363C41");
    });
    $(".nav-item li:eq(3)").mouseleave(function () {
        $(".nav-item li:eq(3)").css("backgroundColor","black");
    });
    $(".nav-item li:eq(4)").mouseenter(function () {
        $(".nav-item li:eq(4)").css("backgroundColor","#363C41");
    });
    $(".nav-item li:eq(4)").mouseleave(function () {
        $(".nav-item li:eq(4)").css("backgroundColor","black");
    });
    //��ߵ�������������ʾ����
    $(".showsearch-btn a img").click(function () {
        if($(".search-area").css("display")==="none"){
            $(".search-area").show(1000);
            $(".search-area input").trigger("focus");
        }
    });

    $(".search-area input").blur(function () {
        $(".search-area").hide(1000);
    });


    //�ö�ά����ʾ����
    $("#show-erweima").mouseenter(function () {
       $(".QR-download").stop().slideDown();
    });
    $("#show-erweima").mouseleave(function () {
        $(".QR-download").stop().slideUp();
    });

    //�ײ�΢�Ŷ�ά����ʾ
    $(".followus-weixin").mouseenter (function () {
       $(".flw-weixin-box").css("display","block");
    });
    $(".followus-weixin").mouseleave (function () {
        $(".flw-weixin-box").css("display","none");
    });
    //�Һ���   �ú�����ʾ����   ÿһ�����
    //console.log($(".fl:eq(0)"));
    $(".index-list>.fl:eq(0)").mouseenter(function () {
        $(".fl .bottom:eq(0)").stop().animate({"height":"210px"});
    });
    $(".index-list>.fl:eq(0)").mouseleave
    (function () {
        $(".fl .bottom:eq(0)").stop().animate({"height":"160px"});
    });

    $(".index-list>.fl:eq(1)").mouseenter(function () {
        $(".fl .bottom:eq(1)").stop().animate({"height":"210px"});
    });
    $(".index-list>.fl:eq(1)").mouseleave
    (function () {
        $(".fl .bottom:eq(1)").stop().animate({"height":"160px"});
    });

    $(".index-list>.fl:eq(2)").mouseenter(function () {
        $(".fl .bottom:eq(2)").stop().animate({"height":"210px"});
    });
    $(".index-list>.fl:eq(2)").mouseleave
    (function () {
        $(".fl .bottom:eq(2)").stop().animate({"height":"160px"});
    });

    $(".index-list>.fl:eq(3)").mouseenter(function () {
        $(".fl .bottom:eq(3)").stop().animate({"height":"210px"});
    });
    $(".index-list>.fl:eq(3)").mouseleave
    (function () {
        $(".fl .bottom:eq(3)").stop().animate({"height":"160px"});
    });

    $(".index-list>.fl:eq(4)").mouseenter(function () {
        $(".fl .bottom:eq(4)").stop().animate({"height":"210px"});
    });
    $(".index-list>.fl:eq(4)").mouseleave
    (function () {
        $(".fl .bottom:eq(4)").stop().animate({"height":"160px"});
    });

    $(".index-list>.fl:eq(5)").mouseenter(function () {
        $(".fl .bottom:eq(5)").stop().animate({"height":"210px"});
    });
    $(".index-list>.fl:eq(5)").mouseleave
    (function () {
        $(".fl .bottom:eq(5)").stop().animate({"height":"160px"});
    });



    //������ʦ��ͣ����  �뿪��ʧ
    $(".star-item>.fl:eq(0)>").mouseenter(function () {
       $(".star-item>.fl:eq(0)").stop().animate({"bottom":"70px"});
    });
    $(".star-item>.fl:eq(0)>").mouseleave(function () {
        $(".star-item>.fl:eq(0)").stop().animate({"bottom":"0px"});
    });

    $(".star-item>.fl:eq(1)>").mouseenter(function () {
        $(".star-item>.fl:eq(1)").stop().animate({"bottom":"70px"});
    });
    $(".star-item>.fl:eq(1)>").mouseleave(function () {
        $(".star-item>.fl:eq(1)").stop().animate({"bottom":"0px"});
    });


    $(".star-item>.fl:eq(2)>").mouseenter(function () {
        $(".star-item>.fl:eq(2)").stop().animate({"bottom":"70px"});
    });
    $(".star-item>.fl:eq(2)>").mouseleave(function () {
        $(".star-item>.fl:eq(2)").stop().animate({"bottom":"0px"});
    });



    $(".star-item>.fl:eq(3)>").mouseenter(function () {
        $(".star-item>.fl:eq(3)").stop().animate({"bottom":"70px"});
    });
    $(".star-item>.fl:eq(3)>").mouseleave(function () {
        $(".star-item>.fl:eq(3)").stop().animate({"bottom":"0px"});
    });
});


//�ֲ�ͼ�Ŀ�ʼ

//ģ��Ӻ�̨�õ�����
window.onload= function () {
    var datas =[
        {
            z: 4,
            left: 0,
            width: 800,
            height: 210,
            top: 45,
            //overflow: hidden
        },
        {
            z: 4,
            left: 0,
            width: 800,
            height: 210,
            top: 45,
            //overflow: hidden
        },
        {
            z: 4,
            left: 0,
            width: 800,
            height: 210,
            top: 45,
            //overflow: hidden
        },
        {
            z: 10,
            left: 200,
            width: 800,
            height: 233,
            top: 34,
            //overflow: hidden,
        },
        {
            z: 6,
            left: 400,
            width: 800,
            height: 210,
            top: 45,
            //overflow: hidden
        },
        {
            z: 6,
            left: 400,
            width: 800,
            height: 210,
            top: 45,
            //overflow: hidden
        },
        {
            z: 6,
            left: 400,
            width: 800,
            height: 210,
            top: 45,
            //overflow: hidden
        },
    ];
//��Ԫ��
    var ul = document.getElementById("pic_content");
    //console.log(ul);
    //�ҵ����м�ͷ
    var box = document.getElementById("scroll_div");
    var arrleft = box.children[1];
    var arrRigth = box.children[2];
//var lis = pic.children;
//�������е�li��li��ǩ�����ʽ
    function move (){
        for (var i =0;i<datas.length;i++){
            var data = datas[i];
            var li = ul.children[i];
            animate(li,{
                width: data.width,
                height:data.height,
                top : data.top,
                left: data.left,
                //overflow:data.overflow,
                zIndex:data.z
            });
        }
    }
    //�����ͷ
    arrleft.onclick = function () {
        var first = datas.shift();
        datas.push(first);
        move();
    };

    arrRigth.onclick = function () {
        //�ѵ�һ���ŵ����һ��
        var last = datas.pop();
        datas.unshift(last);
        move();
    };


    
    setInterval(function () {
       arrRigth.click();
    },3500)
    
    
}

