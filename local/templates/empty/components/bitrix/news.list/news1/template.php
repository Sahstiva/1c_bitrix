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
<div class="container mbl">
	<div class="row">
		<div class="col-md-12">
			<div class="live-main">
				<h5><a href="/company-news/">Новости</a></h5>
				<div class="live-pagination">
					<a class="prev" href="#prev"><i class="fa fa-angle-left"></i></a>
					<a class="next" href="#next"><i class="fa fa-angle-right"></i></a>
				</div>
				<div class="live-list-wrap">
					<div class="live-list">
<?foreach($arResult["ITEMS"] as $cell=>$arItem):?>
	<?
	$this->AddEditAction($arItem['ID'], $arItem['EDIT_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_EDIT"));
	$this->AddDeleteAction($arItem['ID'], $arItem['DELETE_LINK'], CIBlock::GetArrayByID($arItem["IBLOCK_ID"], "ELEMENT_DELETE"), array("CONFIRM" => GetMessage('CT_BNL_ELEMENT_DELETE_CONFIRM')));
	?>

	<div class="live-list-item" id="live-<?=$cell?>">
	<?if(is_array($arItem["PREVIEW_PICTURE"])):?>
		<div class="live-item-body image">
			<a class="live-item-img" href="<?echo $arItem["DETAIL_PAGE_URL"]?>"><img src="<?=$arItem["PREVIEW_PICTURE"]["SRC"];?>"
																					 alt="<?=$arItem["PREVIEW_PICTURE"]["ALT"]?>"
																					 title="<?=$arItem["PREVIEW_PICTURE"]["TITLE"]?>"/></a>
	<?else:?>
		<div class="live-item-body">
	<?endif;?>
			<div class="live-item-body-over" id="<?=$this->GetEditAreaId($arItem['ID']);?>">
				<?if($arParams["DISPLAY_PREVIEW_TEXT"]!="N" && $arItem["PREVIEW_TEXT"]):?>
				<div class="live-item-description">
					<div class="description"><?echo $arItem["PREVIEW_TEXT"];?></div>
				</div>
				<?endif;?>
				<div class="live-item-label">
					<i class="fa fa fa-twitter"></i>
					<a href="<?echo $arItem["DETAIL_PAGE_URL"]?>"><?echo $arItem["NAME"]?></a>
				</div>
				<?if($arParams["DISPLAY_DATE"]!="N" && $arItem["DISPLAY_ACTIVE_FROM"]):?>
				<span class="live-item-data"><?echo $arItem["DISPLAY_ACTIVE_FROM"]?></span>
				<?endif?>
			</div>
		</div>
	</div>

<?endforeach;?>
				</div>
			</div>
		</div>
	</div>
</div>
	</div>
<?endif;?>
