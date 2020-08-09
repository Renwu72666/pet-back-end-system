/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
    config.language = 'zh';
    // config.uiColor = '#AADC6E';
    config.filebrowserBrowseUrl = 'ckfinder/ckfinder.html'; //不要寫成"~/ckfinder/..."或者"/ckfinder/..."
    config.filebrowserImageBrowseUrl = 'ckfinder/ckfinder.html?Type=Images';
    config.filebrowserFlashBrowseUrl = 'ckfinder/ckfinder.html?Type=Flash';
    config.filebrowserUploadUrl = 'ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
    config.filebrowserImageUploadUrl = 'ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images';
    config.filebrowserFlashUploadUrl = 'ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';
    config.filebrowserWindowWidth = '800' ;  //“瀏覽服務器”彈出框的size設置
    config.filebrowserWindowHeight = '500';
}

