const REST_API_KEY = "d2b7a4c136d454a2bc445aa50f1337c0";
        const kakaoLoginUrl = "https://kauth.kakao.com/oauth/authorize";
        const kakaoTokenApiUrl = "https://kauth.kakao.com/oauth/token";
        const redirectUrl = "http://localhost:5500/index.html";

        // 1. 카카오 로그인 창으로 이동
        function moveKakaoLogin() {
            location.href = `${kakaoLoginUrl}?client_id=${REST_API_KEY}&redirect_uri=${redirectUrl}&response_type=code`;
        }

        const urlParams = new URL(location.href).searchParams;
        const code = urlParams.get('code');
        console.log(code);

        getKakaoToken(code);

        // 2. 토큰 받기
        function getKakaoToken(code) {
            let token = "";
            let data = {
                "grant_type": "authorization_code",
                "client_id": REST_API_KEY,
                "redirect_uri": redirectUrl,
                "code": code,
            };

            $.ajax(kakaoTokenApiUrl, {
                data: data,
                dataType: "json",
                method: "POST",
                async: false,
                success: function (resultData) {
                token = resultData.access_token;
            }});
                console.log("토큰 : " + token);
                return token;
        }