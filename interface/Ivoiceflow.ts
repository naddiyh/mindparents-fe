interface Window {
  voiceflow: {
    chat: {
      load: (options: {
        verify: { projectID: string };
        url: string;
        versionID: string;
      }) => void;
    };
  };
}
