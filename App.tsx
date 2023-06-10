/* eslint-disable react-hooks/exhaustive-deps */
import {View, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import RNFS from 'react-native-fs';
import {ArViewerView} from 'react-native-ar-viewer';

const App = () => {
  const [localModelPath, setLocalModelPath] = useState<any[]>([]);

  const modelLinks = [
    'https://github.com/nainglynndw/react-native-ar-viewer/releases/download/v1/AR-Code-1678076062111.usdz',
    'https://github.com/nainglynndw/react-native-ar-viewer/releases/download/v1/Elk_Free.usdz',
  ];

  const getFileName = (url: string): string => {
    const arr = url.split('/');
    const fileName = arr[arr.length - 1];
    return fileName;
  };

  const checkModelExisted = (url: string) => {
    const fileName = getFileName(url);
    const localPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
    RNFS.exists(localPath).then(res => {
      if (!res) {
        downloadModels(url, localPath);
      } else {
        const arr = [...localModelPath, localPath];
        const uniqueArray = [...new Set(arr)];
        setLocalModelPath([...uniqueArray]);
      }
    });
  };

  console.log(localModelPath.length);

  const downloadModels = async (url: string, localPath: string) => {
    await RNFS.downloadFile({
      fromUrl: url,
      toFile: localPath,
    }).promise;
    const arr = [...localModelPath, localPath];
    const uniqueArray = [...new Set(arr)];
    setLocalModelPath([...uniqueArray]);
  };

  useEffect(() => {
    modelLinks.forEach(link => {
      checkModelExisted(link);
    });
  }, [modelLinks.length]);

  return (
    <View style={styles.container}>
      <ArViewerView
        style={{flex: 1}}
        model={localModelPath[0]}
        lightEstimation
        manageDepth
        allowRotate
        allowScale
        allowTranslate
        disableInstantPlacement
        onStarted={() => console.log('started')}
        onEnded={() => console.log('ended')}
        onModelPlaced={() => console.log('model displayed')}
        onModelRemoved={() => console.log('model not visible anymore')}
        planeOrientation={'horizontal'}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  txt: {
    color: 'white',
  },
});
