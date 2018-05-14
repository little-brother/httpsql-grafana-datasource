## Httpsql datasource plugin for Grafana
This is a Grafana plugin to vizualize [httpsql](https://github.com/little-brother/httpsql) responses.

### Installation 
* [Download and unpack](https://github.com/little-brother/httpsql-grafana-datasource/archive/master.zip) to 
```
Win: %GRAFANA_PATH%/data/plugins
Nix: /var/lib/grafana/plugins
```
* Restart Grafana

### How to use
1. Table panel can show any response.
2. Graph panel requires timeseries data. So httpsql must returns only two column `value` and `time` and supports `from` and `to` params.

 

