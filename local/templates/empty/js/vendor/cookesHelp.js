var  cookiesHelper = {
    get: function(name) {
        var bxname, matches, prefix, _ref;
        prefix = ((_ref = this.BX || top.BX) != null ? typeof _ref.message === "function" ? _ref.message('COOKIE_PREFIX') : void 0 : void 0) || 'BITRIX_SM';
        bxname = prefix + '_' + name;
        matches = document.cookie.match(new RegExp("(?:^|; )" + bxname.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        if (matches) {
            return decodeURIComponent(matches[1]);
        } else {
            return null;
        }
    },
    set: function(name, value, options) {
        var bxname, d, expires, prefix, propName, propValue, updatedCookie, _ref;
        prefix = ((_ref = this.BX || top.BX) != null ? typeof _ref.message === "function" ? _ref.message('COOKIE_PREFIX') : void 0 : void 0) || 'BITRIX_SM';
        bxname = prefix + '_' + name;
        options = options || {};
        expires = options.expires;
        if (typeof expires === "number" && expires) {
            d = new Date;
            d.setTime(d.getTime() + expires * 1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }
        value = encodeURIComponent(value);
        updatedCookie = bxname + "=" + value;
        for (propName in options) {
            updatedCookie += "; " + propName;
            propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }
        document.cookie = updatedCookie;
        return null;
    },
    remove: function(name) {
        return this.set(name, '', {
            expires: -1
        });
    }
};