function request(d) {
    for (var c = location.search.slice(1).split("&"), a = 0; a < c.length; a++) {
        var b = c[a].split("=");
        if (b[0] == d)
            if ("undefined" == unescape(b[1]))
                break;
            else
                return unescape(b[1])
    }
    return ""
};


