import com.reactnativebluetoothclassic.BluetoothClassicPackage; // Adjust the package name as necessary

@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new BluetoothClassicPackage() // Add this line
    );
}

import it.innove.BleManagerPackage; // Add this import

public class MainApplication extends Application implements ReactApplication {
  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new BleManagerPackage() // Add this line
    );
  }
}
