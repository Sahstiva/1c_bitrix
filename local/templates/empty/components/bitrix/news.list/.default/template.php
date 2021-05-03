<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>

<?if($arResult["ITEMS"]):?>

    <div class="slider-responsive">
        <div class="slider-responsive-panel">
            <input data-toggle="radio-switch" type="checkbox">
            <span>Наши лучшие предложения Вам</span>
        </div>
        <div class="toggle-height">
            <div class="slider-responsive-controls">
                <a class="hidden-xs" href="#prev"></a>
                <a class="hidden-xs" href="#next"></a>
            </div>
            <div class="slider-responsive-inner">

<?foreach($arResult["ITEMS"] as $cell=>$arItem):?>
	<div class="slider-responsive-inner-item <?if(!$cell):?> active<?endif;?>">
                    <div class="slider-responsive-inner-item-img" style="background-image: url('<?=$arItem['PREVIEW_PICTURE']['SRC']?>')">
                        <div class="slider-responsive-inner-item-img-title">
                            <div class="h2"><? echo $arItem['NAME']?></div>
                            <?if($arParams["DISPLAY_PREVIEW_TEXT"] != "N" && $arItem['PREVIEW_TEXT']):?>
								<div><? echo $arItem['PREVIEW_TEXT']?></div>
							<?endif;?>
							<?if($arItem['PROPERTIES']['url']['VALUE']):?>
							<a href="<?=$arItem['PROPERTIES']['url']['VALUE']?>" class="link">Подробнее...</a>
							<?endif;?>
                        </div>
                    </div>
                </div>
<?endforeach;?>

			</div>
        </div>
    </div>
<?endif;?>
