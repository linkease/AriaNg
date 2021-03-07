(function () {
    'use strict';
    var queryString = location.search;
    var urlParams = new URLSearchParams(queryString);
    angular.module('ariaNg').constant('ariaNgConstants', {
        title: 'AriaNg',
        appPrefix: 'AriaNg',
        optionStorageKey: 'Options',
        languageStorageKeyPrefix: 'Language',
        settingHistoryKeyPrefix: 'History',
        languagePath: 'langs',
        languageFileExtension: '.txt',
        defaultLanguage: 'en',
        defaultHost: 'localhost',
        defaultSecureProtocol: 'https',
        defaultPathSeparator: '/',
        websocketAutoReconnect: true,
        globalStatStorageCapacity: 120,
        taskStatStorageCapacity: 300,
        lazySaveTimeout: 500,
        errorTooltipDelay: 500,
        notificationInPageTimeout: 2000,
        historyMaxStoreCount: 10,
        cachedDebugLogsLimit: 100
    }).constant('ariaNgDefaultOptions', {
        language: 'en',
        theme: 'light',
        title: '${downspeed}, ${upspeed} - ${title}',
        titleRefreshInterval: 5000,
        browserNotification: false,
        rpcAlias: '',
        rpcHost: urlParams.get('lanIp')||'',//lanIp
        rpcPort: urlParams.get('lanPort')||'6800',//lanPort
        ddnsto:urlParams.get('ksdev')?'open':'close',
        ksdev:urlParams.get('ksdev'),
        protocol: urlParams.get('ksdev')?'wss':'http',
        rpcInterface: 'jsonrpc',        httpMethod: 'POST',
        secret: urlParams.get('rpcToken')||'',
        extendRpcServers: [],
        globalStatRefreshInterval: 1000,
        downloadTaskRefreshInterval: 1000,
        swipeGesture: true,
        dragAndDropTasks: true,
        rpcListDisplayOrder: 'recentlyUsed',
        afterCreatingNewTask: 'task-list',
        removeOldTaskAfterRetrying: false,
        confirmTaskRemoval: true,
        includePrefixWhenCopyingFromTaskDetails: true,
        afterRetryingTask: 'task-list-downloading',
        displayOrder: 'default:asc',
        fileListDisplayOrder: 'default:asc',
        peerListDisplayOrder: 'default:asc'
    });
}());
