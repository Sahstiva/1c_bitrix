<?
include_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/urlrewrite.php');

CHTTP::SetStatus("404 Not Found");
@define("ERROR_404","Y");

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$APPLICATION->SetTitle("404 Not Found");
?>

<div class="row">
<div class="col-md-6 col-md-offset-6">
	<div class="page-not-found-text">
		<h1><span>Упс!</span> Ошибочка</h1>
		<p>Дело в том, что страница, которую вы ищете, не существует либо устарела.</p>
		<p class="small">Вы можете вернуться <a href="javascript:history.back()">назад</a>, воспользоваться картой сайта внизу страницы, либо перейти на <a href="/">главную</a>.</p>
	</div>
</div>
</div>
<div class="image">
<img src="<?=SITE_TEMPLATE_PATH?>/img/404.png" alt="">
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>