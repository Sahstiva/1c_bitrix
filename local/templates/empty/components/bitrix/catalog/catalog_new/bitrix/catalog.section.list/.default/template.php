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
$this->setFrameMode(true);?>
<?if(0 < $arResult["SECTIONS_COUNT"]):?>
        <div class="container">
            <div class="portfolio-top">
                <div class="row">
                    <div class="col-md-9 col-sm-8 col-xs-12">
                        <ul class="nav nav-pills">
							<?foreach ($arResult['SECTIONS'] as &$arSection):
								$this->AddEditAction($arResult['SECTION']['ID'], $arResult['SECTION']['EDIT_LINK'], $strSectionEdit);
								$this->AddDeleteAction($arResult['SECTION']['ID'], $arResult['SECTION']['DELETE_LINK'], $strSectionDelete, $arSectionDeleteParams);
								?>
								<li id="<? echo $this->GetEditAreaId($arSection['ID']); ?>"><a href="<? echo $arSection['SECTION_PAGE_URL']; ?>"><? echo $arSection['NAME']; ?></a></li>
							<?endforeach;?>
						</ul>
                    </div>
                </div>
            </div>
<?endif;?>

