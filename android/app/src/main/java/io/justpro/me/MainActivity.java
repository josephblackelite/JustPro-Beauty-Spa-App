package io.justpro.me;

import android.os.Bundle;
import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;
import com.getcapacitor.BridgeActivity;



public class MainActivity extends BridgeActivity {
     @Override
    public void onCreate(Bundle savedInstanceState){

        registerPlugin(GoogleAuth.class);
        registerPlugin(com.getcapacitor.community.stripe.StripePlugin.class);

        // registerPlugin(com.getcapacitor.community.facebooklogin.FacebookLogin.class);
        
        super.onCreate(savedInstanceState);
}
}