<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<?if (!empty($arResult)):?>
	<div class="navbar navbar-intervolga">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-nav">
                            <span class="sr-only">Переключить навигацию</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="/">InterVolga.ru</a>
                    </div>
                    <div class="collapse navbar-collapse" id="top-nav">
                        <ul class="nav navbar-nav">
<?
foreach($arResult as $arItem):
	if($arParams["MAX_LEVEL"] == 1 && $arItem["DEPTH_LEVEL"] > 1) 
		continue;
?>
	<li<?
	if($arItem["SELECTED"]):
	?> class="active"<?
	endif;
	?>><a href="<?=$arItem["LINK"]?>"><?=$arItem["TEXT"]?></a></li>
	
<?endforeach?>
						</ul>
                    </div>
                </div>
            </div>
        </nav>
<?endif?>