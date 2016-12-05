/**
 * Created by jiahailiang on 2016/11/4.
 */
let NetUtil = {
    postJson(url, data, callback){
        // Alert.alert('222');
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:data//
        };

        fetch(url, fetchOptions)
            .then((response) => response.json())
            .then((responseJson) => {
                callback(responseJson);
            }).done();
    },
}
export default NetUtil;

